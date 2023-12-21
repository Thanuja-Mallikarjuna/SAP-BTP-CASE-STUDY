/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "sap/ui/model/json/JSONModel",
        "com/ibm/zcaseprd01/zcaseprdfs01/model/models"
    ],
    function (UIComponent, Device,JSONModel, models) {
        "use strict";

        return UIComponent.extend("com.ibm.zcaseprd01.zcaseprdfs01.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                var oModel,
				oProductsModel,
				oRouter;

                UIComponent.prototype.init.apply(this, arguments);
                oModel = new JSONModel();
                this.setModel(oModel);
    
                // set products demo model on this sample
                oProductsModel = new JSONModel(sap.ui.require.toUrl('com/ibm/zcaseprd01/zcaseprdfs01/model/Products.json'));
                oProductsModel.setSizeLimit(1000);
                this.setModel(oProductsModel, 'productsModel');


                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);
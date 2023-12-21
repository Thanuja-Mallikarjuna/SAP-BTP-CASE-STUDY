sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.ibm.zcaseprd01.zcaseprdfs01.controller.Main", {
            onInit: function() {
                
              },
              onRowPress: function (oEvent) {
                var oSelectedItem = oEvent.getParameter("listItem");
                var oContext = oSelectedItem.getBindingContext("productsModel");
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("Detail", { productPath: oContext.getPath().substr(1) });
              }
            
              
        });
    });
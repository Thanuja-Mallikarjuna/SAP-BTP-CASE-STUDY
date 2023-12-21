/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comibmzcaseprd01/zcaseprdfs01/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

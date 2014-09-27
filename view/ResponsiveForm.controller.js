/*global generatorSapui5Playground, SAPUI5, JST*/
jQuery.sap.require("sap.m.MessageBox");

sap.ui.controller("view.ResponsiveForm", {

	onInit: function() {

	},

	doSearch: function(evt) {

		sap.m.MessageBox.alert(
			evt.getSource().getValue() || 'Empty'
		);

	}

});
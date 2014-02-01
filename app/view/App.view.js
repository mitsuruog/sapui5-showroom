sap.ui.jsview("view.App", {

	getControllerName: function () {
		return "view.App";
	},

	createContent : function (oController) {
		
		// to avoid scrollbars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		this.app = new sap.m.SplitApp({});

		this.app.addMasterPage(new sap.ui.jsview("Menu", "view.Menu"));
		this.app.addDetailPage(new sap.ui.jsview("Home", "view.Home"));
		
		return this.app;

	}
	
});

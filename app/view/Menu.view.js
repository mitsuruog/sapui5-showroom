sap.ui.jsview("view.Menu", {

	getControllerName: function() {
		return "view.Menu";
	},

	createContent: function(oController) {

		this.page = new sap.m.Page({
			title: "menu",
			content: [],
			footer: []
		});

		var list = new sap.m.List({
      headerText: "sample",
      items: {
        path: "menu>/",
        template: new sap.m.StandardListItem({
        	type: sap.m.ListType.Navigation,
          title: "{menu>title}",
          description: "{menu>text}",
          icon: "{menu>icon}",
          iconDensityAware: false,
          iconInset: false,
          press: [oController.pressItem, oController]
        })
      }
    });

    this.page.addContent(list);

		return this.page;
	}
});
sap.ui.jsview("view.Home", {

	getControllerName: function() {
		return "view.Home";
	},

	createContent: function(oController) {

		this.page = new sap.m.Page({
			title: "generator-sapui5-playground",
			content: [],
			footer: []
		});

		var header = new sap.m.ObjectHeader({
			title: "'Allo, 'Allo!",
			intro: "The SAPUI5 framework which is a platform for developing rich user interfaces for modern Web business applications."
		});

		this.page.addContent(header);

		var list = new sap.m.List({
			headerText: "More infomation here."
		});

		list.bindAggregation("items", {
			path: "links>/",
			template: new sap.m.StandardListItem({
				title: "{links>title}",
				description: "{links>description}",
				icon: "{links>icon}",
				type: sap.m.ListType.Navigation,
				press : [oController.itemPress, oController]
			})
		});

		this.page.addContent(list);

		var footer = new sap.m.Bar({
			contentMiddle: [
				new sap.m.Link({
					text: "Produced by mitsuruog 2014",
					target: "_blank",
					href: "https://github.com/mitsuruog/generator-sapui5"
				})
			]
		});

		this.page.setFooter(footer);

		return this.page;
	}
});
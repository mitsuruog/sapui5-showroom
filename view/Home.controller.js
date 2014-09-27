/*global generatorSapui5Playground, SAPUI5, JST*/

sap.ui.controller("view.Home", {

	onInit: function() {

		var model = new sap.ui.model.json.JSONModel(
			[{
				title: "Developer-Guide",
				description: "a summary of valuable information around the used programming languages, open source technologies, development tools and APIs",
				link: "https://openui5.hana.ondemand.com/#docs/guide/Documentation.html",
				icon: "sap-icon://study-leave"
			}, {
				title: "Controls",
				description: "running demo examples with descriptions and source codes",
				link: "https://openui5.hana.ondemand.com/#content/Controls/index.html",
				icon: "sap-icon://puzzle"
			}, {
				title: "API-Reference",
				description: "JavaScript documentation of Framework and Control API",
				link: "https://openui5.hana.ondemand.com/#docs/api/symbols/sap.ui.html",
				icon: "sap-icon://sys-find"
			}, {
				title: "Test Suite",
				description: "all controls in various implementation flavors, with an interactive part for property changes",
				link: "https://openui5.hana.ondemand.com/#demoapps.html",
				icon: "sap-icon://ipad"
			}]
		);
		this.getView().setModel(model, "links");

	},

	itemPress: function(evt){

		var link = evt.getSource().getBindingContext('links').getObject().link;
		window.open(link);

	}

});
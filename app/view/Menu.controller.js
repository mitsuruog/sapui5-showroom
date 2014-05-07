/*global generatorSapui5Playground, SAPUI5, JST*/

sap.ui.controller("view.Menu", {

	onInit: function() {

		var menuModel = new sap.ui.model.json.JSONModel([{
			title: 'responsive form',
			text: '',
			viewName: 'ResponsiveForm'
		},{
			title: 'table',
			text: '',
			viewName: 'Table'
		},{
			title: 'Form validation',
			text: '',
			viewName: 'Validation'
		},{
			title: 'Custom Type',
			text: '',
			viewName: 'Type'
		},{
			title: 'Fragment',
			viewName: 'Fragment'
		}]);
		this.getView().setModel(menuModel, 'menu');

	},

	pressItem: function(evt) {

		var viewName = evt.getSource().getBindingContext('menu').getObject().viewName;
		var bus = sap.ui.getCore().getEventBus();
		bus.publish("nav", "to", {
			id: viewName
		});
	
	}

});
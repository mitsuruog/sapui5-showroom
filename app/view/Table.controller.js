sap.ui.controller("view.Table", {

	onInit: function() {

		var model = new sap.ui.model.json.JSONModel({
			editable: false
		});
		this.getView().setModel(model, 'data');

	}

});
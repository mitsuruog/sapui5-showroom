sap.ui.controller("view.Table", {

	onInit: function() {

		var model = new sap.ui.model.json.JSONModel({
			editable: false
		});
		this.getView().setModel(model, 'data');

	},

	handleFilterChange: function(evt) {

		// create dialog
		if (!this._inlineDialog) {
			var view = this.getView();
			this._inlineDialog = new sap.m.ViewSettingsDialog({
				sortItems: [
					new sap.m.ViewSettingsItem({
						text: "Product",
						key: "ProductId",
						selected: true
					}),
					new sap.m.ViewSettingsItem({
						text: "Supplier",
						key: "SupplierName"
					}),
					new sap.m.ViewSettingsItem({
						text: "Weight",
						key: "WeightMeasure"
					}),
					new sap.m.ViewSettingsItem({
						text: "Price",
						key: "Price"
					})
				],
				confirm: function(evt) {
					var params = evt.getParameters();
					var sortPath = params.sortItem.getKey();
					var sorter = new sap.ui.model.Sorter(sortPath, params.sortDescending);
					//
					//var binding = view.byId("lineItemList").getBinding("items");
					var binding  = sap.ui.getCore().getElementById('lineItemList').getBinding('items');
					binding.sort(sorter);
				}
			});
		}

		//dialog open
		this._inlineDialog.open();

	}

});
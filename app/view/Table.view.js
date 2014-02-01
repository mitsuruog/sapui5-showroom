sap.ui.jsview("view.Table", {

	getControllerName: function() {
		return "view.Table";
	},

	createContent: function(oController) {

		this.page = new sap.m.Page({
			title: "Table",
			content: [],
			footer: []
		});

		var table = new sap.m.Table({
			headerText: "Products",
			columns: [
				new sap.m.Column({
					width: "12em",
					header: new sap.m.Label({
						text: "Product"
					})
				}),
				new sap.m.Column({
					header: new sap.m.Label({
						text: "Supplier"
					}),
					minScreenWidth: "Tablet",
					demandPopin: true
				}),
				new sap.m.Column({
					header: new sap.m.Label({
						text: "Dimensions"
					}),
					minScreenWidth: "Tablet",
					demandPopin: true,
					hAlign: "Right"
				}),
				new sap.m.Column({
					header: new sap.m.Label({
						text: "Weight"
					}),
					minScreenWidth: "Tablet",
					demandPopin: true,
					hAlign: "Center"
				}),
				new sap.m.Column({
					header: new sap.m.Label({
						text: "Price"
					}),
					hAlign: "Right"
				})
			],
			items: {
				path: "/ProductCollection",
				//filter: oInitialFilter,
				sorter: new sap.ui.model.Sorter("Name", false),
				template: new sap.m.ColumnListItem({
					cells: [
						new sap.m.ObjectIdentifier({
							title: "{Name}",
							text: "{ProductId}"
						}),
						new sap.m.Text({
							text: "{SupplierName}"
						}),
						new sap.m.Text({
							text: "{Width} x {Depth} x {Height} {DimUnit}"
						}),
						new sap.m.ObjectNumber({
							number: "{WeightMeasure}",
							unit: "{WeightUnit}",
							state: "{path:'WeightMeasure', formatter: 'util.Formatter.weightState'}"
						}),
						new sap.m.ObjectNumber({
							number: "{Price}",
							unit: "{CurrencyCode}"
						})
					]
				})
			}
		});

		this.page.addContent(table);

		return this.page;
	}
});
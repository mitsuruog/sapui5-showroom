jQuery.sap.require("util.Formatter");

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
			id: 'lineItemList',
			headerToolbar: new sap.m.Toolbar({
				content: [
					new sap.m.Text({
						text: "Products"
					}),
					new sap.m.ToolbarSpacer(),
					new sap.m.Button({
						icon: "sap-icon://sort",
						press: [oController.handleFilterChange, oController]
					})
				]
			}),
			growing: true,
			growingThreshold: 5,
			growingTriggerText: 'もっと見る',
			noDataText: "データがありません。",
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
				sorter: new sap.ui.model.Sorter("ProductId", false),
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
							//[MEMO]複数設定すると表示できない。公式サイトだと出来てるっぽのに
							//text: "{Width} x {Depth} x {Height} {DimUnit}"
							text: "{Width}"
						}),
						new sap.m.ObjectNumber({
							number: "{WeightMeasure}",
							unit: "{WeightUnit}",
							state: {
								path: 'WeightMeasure',
								formatter: util.Formatter.weightState
							}
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
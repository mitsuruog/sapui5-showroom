
/*
入力用のFragments
 */

(function() {
  sap.ui.jsfragment("util.Edit", {
    createContent: function(oController) {
      var detailForm, detailGrid;
      detailForm = new sap.ui.layout.form.SimpleForm({
        minWidth: 1024,
        maxContainerCols: 2,
        editable: true,
        layout: "ResponsiveGridLayout",
        title: {
          path: "/ProductCollection/0/ProductId",
          formatter: function(oVal) {
            return "商品ID: " + oVal;
          }
        },
        labelSpanL: 4,
        labelSpanM: 4,
        emptySpanL: 0,
        emptySpanM: 0,
        columnsL: 2,
        columnsM: 2,
        content: [
          new sap.m.Label({
            text: "商品名"
          }), new sap.m.Input({
            value: "{/ProductCollection/0/Name}"
          }), new sap.m.Label({
            text: "メーカー"
          }), new sap.m.Input({
            value: "{/ProductCollection/0/SupplierName}"
          })
        ]
      });
      return detailGrid = new sap.ui.layout.Grid({
        defaultSpan: "L12 M12 S12",
        width: "auto",
        content: [detailForm]
      });
    }
  });

}).call(this);

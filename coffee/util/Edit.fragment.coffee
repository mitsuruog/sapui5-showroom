###
入力用のFragments
###
sap.ui.jsfragment "com.mitsuruog.sapui5.showroom.util.Edit", 

  createContent: (oController) ->
    
    detailForm = new sap.ui.layout.form.SimpleForm
      minWidth: 1024
      maxContainerCols: 2
      editable: true
      layout: "ResponsiveGridLayout"
      title: 
        path: "/ProductCollection/0/ProductId"
        formatter: (oVal) ->
          "商品ID: #{oVal}"
      labelSpanL: 4
      labelSpanM: 4
      emptySpanL: 0
      emptySpanM: 0
      columnsL: 2
      columnsM: 2
      content: [
        new sap.m.Label
          text: "商品名"
        new sap.m.Input
          value: "{/ProductCollection/0/Name}"
        new sap.m.Label
          text: "メーカー"
        new sap.m.Input
          value: "{/ProductCollection/0/SupplierName}"
      ]

    detailGrid = new sap.ui.layout.Grid
      defaultSpan: "L12 M12 S12"
      width: "auto"
      content: [detailForm]   
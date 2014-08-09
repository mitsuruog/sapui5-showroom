###
参照用のFragments
###
sap.ui.jsfragment "com.mitsuruog.sapui5.showroom.util.Detail", 

  createContent: (oController) ->
    
    detailForm = new sap.ui.layout.form.SimpleForm
      minWidth: 1024
      maxContainerCols: 2
      editable: false
      layout: "ResponsiveGridLayout"
      title: 
        path: "/ProductCollection/0/ProductId"
        formatter: (oVal) ->
          "商品ID: #{oVal}"
      labelSpanL: 4
      labelSpanM: 4
      emptySpanL: 1
      emptySpanM: 1
      columnsL: 1
      columnsM: 1
      content: [
        new sap.m.Label
          text: "商品名"
        new sap.m.Text
          text: "{/ProductCollection/0/Name}"
        new sap.m.Label
          text: "メーカー"
        new sap.m.Text
          text: "{/ProductCollection/0/SupplierName}"
      ]

    detailGrid = new sap.ui.layout.Grid
      defaultSpan: "L12 M12 S12"
      width: "auto"
      content: [detailForm]
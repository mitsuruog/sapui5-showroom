sap.ui.jsview "com.mitsuruog.sapui5.showroom.view.Syncbind",

  getControllerName: -> "com.mitsuruog.sapui5.showroom.view.Syncbind"

  createContent: (oController) ->
    @page = new sap.m.Page
      title: "Data binding sample that synchronized between controls"
    
    panel1 = new sap.m.Panel
      headerText: "Sample of twoway data binding, such as angularjs"
      content: [
        new sap.m.Input
          value: "{/basic}"
        new sap.m.Text
          text: "{/basic}"
      ]
      
      panel2 = new sap.m.Panel
        headerText: "Sample of using a check box"
        content: [
          new sap.m.CheckBox
            selected: "{/enabled}"
            text: "control the enabled the following"
            select: [oController.handleCheck, oController]
          new sap.m.Input
            enabled: "{/enabled}"
        ]
        
      panel3 = new sap.m.Panel
        headerText: "Sample of aggregation data binding synchronized"
        content: [
          new sap.m.Text
            text: "Type 0 to 2"
          new sap.m.Input
            liveChange: [oController.handleLiveChange, oController]
          new sap.m.Text
            id: @createId "synctext"
            text: "{/unset}"
        ]
 
    @page.addContent panel1
    @page.addContent panel2
    @page.addContent panel3

    @page
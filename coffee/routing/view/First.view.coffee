sap.ui.jsview "view.First",

  getControllerName: -> "view.First"

  createContent: (oController) ->
    @page = new sap.m.Page 
      title: "First Page"
      content: [
        new sap.m.Text
          text: "Here is first page."
      ]
    
    footer = new sap.m.Bar
      contentRight: [
        new sap.m.Button
          text: "go to next page"
          press: [oController.next, oController]
      ]
      
    @page.setFooter footer
    @page
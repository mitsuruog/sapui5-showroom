sap.ui.jsview "view.Second",

  getControllerName: -> "view.Second"

  createContent: (oController) ->
    @page = new sap.m.Page 
      title: "Second Page"
      content: [
        new sap.m.Text
          text: "Here is second page."
      ]
    
    footer = new sap.m.Bar
      contentLeft: [
        new sap.m.Button
          text: "back to page"
          press: [oController.back, oController]
      ]
      contentRight: [
        new sap.m.Button
          text: "go to next page"
          press: [oController.next, oController]
      ]
      
    @page.setFooter footer
    @page
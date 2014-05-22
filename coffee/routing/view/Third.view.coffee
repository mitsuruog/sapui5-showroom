sap.ui.jsview "view.Third",

  getControllerName: -> "view.Third"

  createContent: (oController) ->
    @page = new sap.m.Page 
      title: "Third Page"
      content: [
        new sap.m.Text
          text: "Here is third page. ID is "
        new sap.m.Text
          text: "{data>/id}"
      ]
    
    footer = new sap.m.Bar
      contentLeft: [
        new sap.m.Button
          text: "back to page"
          press: [oController.back, oController]
      ]
      
    @page.setFooter footer
    @page
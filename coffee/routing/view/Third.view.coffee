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
        new sap.m.IconTabBar
          id: "tabConteiner"
          select: [oController.select, oController]
          items: [
            new sap.m.IconTabFilter
              key: "tab1"
              icon: "sap-icon://hint"
              content: [
                new sap.m.Text
                  text: "first tab"
              ]
            new sap.m.IconTabFilter 
              key: "tab2"
              icon: "sap-icon://attachment"
              content: [
                new sap.m.Text
                  text: "second tab"
              ]
            new sap.m.IconTabFilter 
              key: "tab3"
              icon: "sap-icon://notes"
              content: [
                new sap.m.Text
                  text: "third tab"
              ]
          ]
      ]
    
    footer = new sap.m.Bar
      contentLeft: [
        new sap.m.Button
          text: "back to page"
          press: [oController.back, oController]
      ]
      
    @page.setFooter footer
    @page
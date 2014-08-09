sap.ui.jsview "com.mitsuruog.sapui5.showroom.view.Fragment",

  getControllerName: -> "com.mitsuruog.sapui5.showroom.view.Fragment"

  createContent: (oController) ->

    @page = new sap.m.Page
      title: "Fragment"
      id: "fragContainer"

    footer = new sap.m.Bar
      contentMiddle: [
        new sap.m.Button
          text: "dialog"
          press: [oController.openDialog, oController]
        new sap.m.Button
          text: "toggle"
          press: [oController.pressedToggle, oController]
      ]

    @page.setFooter footer

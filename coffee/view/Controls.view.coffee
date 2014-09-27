jQuery.sap.require "com.mitsuruog.sapui5.showroom.controls.SayHello"
jQuery.sap.require "com.mitsuruog.sapui5.showroom.controls.Card"
jQuery.sap.require "com.mitsuruog.sapui5.showroom.controls.BlueContainer"
jQuery.sap.require "com.mitsuruog.sapui5.showroom.controls.HoverButton"

sap.ui.jsview "com.mitsuruog.sapui5.showroom.view.Controls",

  getControllerName: -> "com.mitsuruog.sapui5.showroom.view.Controls"

  createContent: (oController) ->
    @page = new sap.m.Page
      title: "Creating custom controls"
    
      panel1 = new sap.m.Panel
        headerText: "Hello world."
        content: [
          new mitsuruog.SayHello
          new mitsuruog.SayHello
            name: "mitsuruog"
          new mitsuruog.SayHello
            name: "{/name}"
        ]
    
      pinkCard = new mitsuruog.Card
        name: "pink mitsuruog"
      pinkCard.addStyleClass "pink"
      
      panel2 = new sap.m.Panel
        headerText: "My business card"
        content: [
          new mitsuruog.Card
            name: "mitsuruog"
            size: "100px"
          pinkCard
        ]

      panel3 = new sap.m.Panel
        headerText: "Custom container and extending control"
        content: [
          new sap.m.Text
            text: "{/hover}"
          new mitsuruog.BlueContainer
            content: [
              new mitsuruog.HoverButton
                text: "top left button"
                hover: oController.handleHover
              new mitsuruog.HoverButton
                text: "top right button"
                hover: oController.handleHover
            ]
          new mitsuruog.BlueContainer
            boxColor: "#B61972"
            content: [
              new mitsuruog.HoverButton
                text: "buttom left button"
                hover: oController.handleHover
              new mitsuruog.HoverButton
                text: "buttom right button"
                hover: oController.handleHover
            ]
        ]
      
    @page.addContent panel1
    @page.addContent panel2
    @page.addContent panel3

    @page
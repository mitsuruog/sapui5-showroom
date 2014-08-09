###
Menu.view
###
sap.ui.jsview "com.mitsuruog.sapui5.showroom.view.Menu",

  getControllerName: -> "com.mitsuruog.sapui5.showroom.view.Menu"

  createContent: (oController) ->
    @page = new sap.m.Page
      title: "Menu"

    menuItems = [
      new sap.m.DisplayListItem
        label: "Responsive form"
        value: "Form"
        type: "Navigation"
      new sap.m.DisplayListItem
        label: "Form validation"
        value: "Validation"
        type: "Navigation"
      new sap.m.DisplayListItem
        label: "Custom Type"
        value: "Type"
        type: "Navigation"
      new sap.m.DisplayListItem
        label: "Fragment"
        value: "Fragment"
        type: "Navigation"
      new sap.m.DisplayListItem
        label: "Locale"
        value: "Locale"
        type: "Navigation"
      ]

    @page.addContent new sap.m.List
      items: menuItems
      itemPress: [oController.onItemPress, oController]

    @page
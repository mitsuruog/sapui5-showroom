sap.ui.controller "view.First",
  onInit: ->
  next: ->
    router = sap.ui.core.UIComponent.getRouterFor @
    router.navTo "Second", null
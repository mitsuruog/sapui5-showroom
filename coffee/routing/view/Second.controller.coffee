sap.ui.controller "view.Second",
  onInit: ->
  back: ->
    window.history.go -1
  next: ->
    router = sap.ui.core.UIComponent.getRouterFor @
    router.navTo "Third", 
      id: 1
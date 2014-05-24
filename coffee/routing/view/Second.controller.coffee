sap.ui.controller "view.Second",
  onInit: ->
    @router = sap.ui.core.UIComponent.getRouterFor @

  back: ->
    window.history.go -1
  
  next: ->
    @router.navTo "Third", 
      id: 1
sap.ui.controller "view.Second",
  onInit: ->
    @router = sap.ui.core.UIComponent.getRouterFor @

  back: ->
    @router.navTo "First"
  
  next: ->
    @router.navTo "Third", 
      id: 1
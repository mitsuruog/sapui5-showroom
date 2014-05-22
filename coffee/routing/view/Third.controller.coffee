sap.ui.controller "view.Third",
  onInit: ->
  	router = sap.ui.core.UIComponent.getRouterFor @
  	router.attachRoutePatternMatched @_handleRouteMatched, @

  _handleRouteMatched: (oEvt) ->
  	unless "Third" is oEvt.getParameter "name" 
  		return
  	id = oEvt.getParameter("arguments").id
  	model = new sap.ui.model.json.JSONModel
  		id: id
  	@getView().setModel model, "data" 

  back: ->
    window.history.go -1
###
Menu.controller
###
sap.ui.controller "com.mitsuruog.sapui5.showroom.view.Menu", 

	onInit: ->
		@router = sap.ui.core.UIComponent.getRouterFor @

	onItemPress: (evt) ->
    view = evt.getParameters().listItem.getValue()
    @router.navTo view
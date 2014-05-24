sap.ui.controller "view.Third",
  onInit: ->
    @router = sap.ui.core.UIComponent.getRouterFor @
    @router.attachRoutePatternMatched @_handleRouteMatched, @

  _handleRouteMatched: (oEvt) ->
    unless "Third" is oEvt.getParameter "name" 
      return

    tabConteiner = sap.ui.getCore().byId "tabConteiner"

    @id = oEvt.getParameter("arguments").id
    @tab = oEvt.getParameter("arguments").tab or "tab1"

    #画面内でタブ移動する場合は、同じkeyを設定すると
    #コンテンツが隠れてしまうので回避（SAPUI5側のバグ？）
    unless tabConteiner.getSelectedKey() is @tab
      tabConteiner.setSelectedKey @tab
    
    model = new sap.ui.model.json.JSONModel
      id: @id
    @getView().setModel model, "data" 

  back: ->
    @router.navTo "Second"

  select: (oEvt) ->
    @tab = oEvt.getSource().getSelectedKey()
    @router.navTo "Third",
      id: @id
      tab: @tab

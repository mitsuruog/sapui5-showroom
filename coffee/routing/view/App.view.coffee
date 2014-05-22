sap.ui.jsview "view.App",

  getControllerName: -> "view.App"

  createContent: (oController) ->
    @setDisplayBlock true
    sap.m.App "navConteiner"

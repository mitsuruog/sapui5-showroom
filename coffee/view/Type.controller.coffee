sap.ui.controller "view.Type", 

  onInit: ->
    model = new sap.ui.model.json.JSONModel
      hoge: "mitusurog"
    @getView().setModel model, "type"

    sap.ui.getCore().attachValidationError (oEvt) ->
      control = oEvt.getParameter "element"
      if control and control.setValueState
        control.setValueState "Error"
        jQuery.sap.log.error "view.Typeでエラーが発生したよん。"
  
  press: ->
    input = sap.ui.getCore().getElementById "hoge"
    unless input.getValue()
      input.setValueState "Error"
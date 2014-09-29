jQuery.sap.declare "com.mitsuruog.sapui5.showroom.controls.NoisyInput"

sap.m.Input.extend "mitsuruog.NoisyInput", 

  metadata:
    properties:
      beQuiet:
        type: "boolean"
        defaultValue: false

  onfocusin: (evt) ->
    unless @getBeQuiet() then @addStyleClass "shake"
    
  onfocusout: (evt) ->  
    unless @getBeQuiet() then @removeStyleClass "shake"
  
  init: ->
    sap.m.Input.prototype.init.apply @, arguments
    self = @
  
  onBeforeRendering: ->
    sap.m.Input.prototype.onBeforeRendering @, arguments
    
  renderer: 
    addInnerStyles: (rm, control) ->
      rm.addStyle "background-color", "#23AC0E"
      rm.addStyle "border-radius", "7px"
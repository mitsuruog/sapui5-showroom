jQuery.sap.declare "com.mitsuruog.sapui5.showroom.controls.Card"

sap.ui.core.Control.extend "mitsuruog.Card",

  metadata:
    properties:
      name:
        type: "string"
      size:
        type: "sap.ui.core.CSSSize"
        defaultValue: "200px"
    
  renderer: (rm, control) ->
    
    rm.write "<div"
    # writeControlDataするとcontrolIDが割り振られて
    # イベントがキャッチできるようになる
    rm.writeControlData control
    rm.addStyle "width", control.getSize()
    rm.addStyle "height", control.getSize()
    rm.writeStyles()
    rm.addClass "mitsuruog-card"
    rm.writeClasses()
    rm.write ">"
    
    rm.writeEscaped control.getName()
    
    rm.write "</div>"
    
  onclick: (evt) ->
    jQuery.sap.require "sap.m.MessageToast"
    sap.m.MessageToast.show "card clicked!! name is #{@getName()}"
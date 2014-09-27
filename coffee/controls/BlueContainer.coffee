jQuery.sap.declare "com.mitsuruog.sapui5.showroom.controls.BlueContainer"

sap.ui.core.Control.extend "mitsuruog.BlueContainer",

  metadata:
    properties:
      boxColor:
        type: "string"
        defaultValue: "#CBE6F3"
    aggregations:
      content:
        type: "sap.ui.core.Control"
        multiple: true
        singularName: "content"
    
  renderer: (rm, control) ->
    
    rm.write "<div"
    rm.writeControlData control
    rm.addClass "blue"
    rm.writeClasses()
    rm.write ">"
    
    items = control.getContent()
    for item in items
      rm.write "<div"
      rm.addStyle "display", "inline-block"
      rm.addStyle "border", "1px solid #{control.getBoxColor()}"
      rm.addStyle "margin", "7px"
      rm.addStyle "padding", "7px"
      rm.writeStyles()      
      rm.write ">"
      
      rm.renderControl item
      rm.write "</div>"
    
    rm.write "</div>"
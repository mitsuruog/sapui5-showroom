jQuery.sap.declare "com.mitsuruog.sapui5.showroom.controls.SayHello"

sap.ui.core.Control.extend "mitsuruog.SayHello",
    
    metadata:
      properties:
        name:
          type: "string"
          defaultValue: "world"
    
    # rm -> sap.ui.core.RenderManager
    # https://openui5.hana.ondemand.com/docs/api/symbols/sap.ui.core.RenderManager.html
    renderer: (rm, control) ->
      
      rm.write "<div>Hello "
      
      rm.writeEscaped control.getName()
      
      rm.write "</div>"
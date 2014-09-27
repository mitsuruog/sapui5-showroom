jQuery.sap.declare "com.mitsuruog.sapui5.showroom.controls.HoverButton"

sap.m.Button.extend "mitsuruog.HoverButton", 

  metadata:
    events:
      hover: {}
      
  onmouseover: (evt) ->
    @fireHover()
    
  renderer: {}
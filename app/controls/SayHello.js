(function() {
  jQuery.sap.declare("com.mitsuruog.sapui5.showroom.controls.SayHello");

  sap.ui.core.Control.extend("mitsuruog.SayHello", {
    metadata: {
      properties: {
        name: {
          type: "string",
          defaultValue: "world"
        }
      }
    },
    renderer: function(rm, control) {
      rm.write("<div>Hello ");
      rm.writeEscaped(control.getName());
      return rm.write("</div>");
    }
  });

}).call(this);

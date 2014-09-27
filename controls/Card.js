(function() {
  jQuery.sap.declare("com.mitsuruog.sapui5.showroom.controls.Card");

  sap.ui.core.Control.extend("mitsuruog.Card", {
    metadata: {
      properties: {
        name: {
          type: "string"
        },
        size: {
          type: "sap.ui.core.CSSSize",
          defaultValue: "200px"
        }
      }
    },
    renderer: function(rm, control) {
      rm.write("<div");
      rm.writeControlData(control);
      rm.addStyle("width", control.getSize());
      rm.addStyle("height", control.getSize());
      rm.writeStyles();
      rm.addClass("mitsuruog-card");
      rm.writeClasses();
      rm.write(">");
      rm.writeEscaped(control.getName());
      return rm.write("</div>");
    },
    onclick: function(evt) {
      jQuery.sap.require("sap.m.MessageToast");
      return sap.m.MessageToast.show("card clicked!! name is " + (this.getName()));
    }
  });

}).call(this);

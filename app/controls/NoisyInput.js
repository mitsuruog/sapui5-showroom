(function() {
  jQuery.sap.declare("com.mitsuruog.sapui5.showroom.controls.NoisyInput");

  sap.m.Input.extend("mitsuruog.NoisyInput", {
    metadata: {
      properties: {
        beQuiet: {
          type: "boolean",
          defaultValue: false
        }
      }
    },
    onfocusin: function(evt) {
      if (!this.getBeQuiet()) {
        return this.addStyleClass("shake");
      }
    },
    onfocusout: function(evt) {
      if (!this.getBeQuiet()) {
        return this.removeStyleClass("shake");
      }
    },
    init: function() {
      return sap.m.Input.prototype.init.apply(this, arguments);
    },
    onBeforeRendering: function() {
      return sap.m.Input.prototype.onBeforeRendering.apply(this, arguments);
    },
    renderer: {
      addInnerStyles: function(rm, control) {
        rm.addStyle("background-color", "#23AC0E");
        return rm.addStyle("border-radius", "7px");
      }
    }
  });

}).call(this);

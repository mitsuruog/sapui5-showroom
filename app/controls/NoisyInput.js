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
      var self;
      sap.m.Input.prototype.init.apply(this, arguments);
      return self = this;
    },
    onBeforeRendering: function() {
      return sap.m.Input.prototype.onBeforeRendering(this, arguments);
    },
    renderer: {
      addInnerStyles: function(rm, control) {
        rm.addStyle("background-color", "#23AC0E");
        return rm.addStyle("border-radius", "7px");
      }
    }
  });

}).call(this);

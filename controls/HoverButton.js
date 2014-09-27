(function() {
  jQuery.sap.declare("com.mitsuruog.sapui5.showroom.controls.HoverButton");

  sap.m.Button.extend("mitsuruog.HoverButton", {
    metadata: {
      events: {
        hover: {}
      }
    },
    onmouseover: function(evt) {
      return this.fireHover();
    },
    renderer: {}
  });

}).call(this);

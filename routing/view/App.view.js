(function() {
  sap.ui.jsview("view.App", {
    getControllerName: function() {
      return "view.App";
    },
    createContent: function(oController) {
      this.setDisplayBlock(true);
      return sap.m.App("navConteiner");
    }
  });

}).call(this);

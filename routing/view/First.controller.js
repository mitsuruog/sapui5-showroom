(function() {
  sap.ui.controller("view.First", {
    onInit: function() {},
    next: function() {
      var router;
      router = sap.ui.core.UIComponent.getRouterFor(this);
      return router.navTo("Second", null);
    }
  });

}).call(this);

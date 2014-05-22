(function() {
  sap.ui.controller("view.Second", {
    onInit: function() {},
    back: function() {
      return window.history.go(-1);
    },
    next: function() {
      var router;
      router = sap.ui.core.UIComponent.getRouterFor(this);
      return router.navTo("Third", {
        id: 1
      });
    }
  });

}).call(this);

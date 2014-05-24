(function() {
  sap.ui.controller("view.Second", {
    onInit: function() {
      return this.router = sap.ui.core.UIComponent.getRouterFor(this);
    },
    back: function() {
      return this.router.navTo("First");
    },
    next: function() {
      return this.router.navTo("Third", {
        id: 1
      });
    }
  });

}).call(this);

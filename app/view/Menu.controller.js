
/*
Menu.controller
 */

(function() {
  sap.ui.controller("com.mitsuruog.sapui5.showroom.view.Menu", {
    onInit: function() {
      return this.router = sap.ui.core.UIComponent.getRouterFor(this);
    },
    onItemPress: function(evt) {
      var view;
      view = evt.getParameters().listItem.getValue();
      return this.router.navTo(view);
    }
  });

}).call(this);

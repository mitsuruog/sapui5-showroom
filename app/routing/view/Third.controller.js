(function() {
  sap.ui.controller("view.Third", {
    onInit: function() {
      var router;
      router = sap.ui.core.UIComponent.getRouterFor(this);
      return router.attachRoutePatternMatched(this._handleRouteMatched, this);
    },
    _handleRouteMatched: function(oEvt) {
      var id, model;
      if ("Third" !== oEvt.getParameter("name")) {
        return;
      }
      id = oEvt.getParameter("arguments").id;
      model = new sap.ui.model.json.JSONModel({
        id: id
      });
      return this.getView().setModel(model, "data");
    },
    back: function() {
      return window.history.go(-1);
    }
  });

}).call(this);

(function() {
  sap.ui.controller("view.Third", {
    onInit: function() {
      this.router = sap.ui.core.UIComponent.getRouterFor(this);
      return this.router.attachRoutePatternMatched(this._handleRouteMatched, this);
    },
    _handleRouteMatched: function(oEvt) {
      var model, tabConteiner;
      if ("Third" !== oEvt.getParameter("name")) {
        return;
      }
      tabConteiner = sap.ui.getCore().byId("tabConteiner");
      this.id = oEvt.getParameter("arguments").id;
      this.tab = oEvt.getParameter("arguments").tab || "tab1";
      if (tabConteiner.getSelectedKey() !== this.tab) {
        tabConteiner.setSelectedKey(this.tab);
      }
      model = new sap.ui.model.json.JSONModel({
        id: this.id
      });
      return this.getView().setModel(model, "data");
    },
    back: function() {
      return this.router.navTo("Second");
    },
    select: function(oEvt) {
      this.tab = oEvt.getSource().getSelectedKey();
      return this.router.navTo("Third", {
        id: this.id,
        tab: this.tab
      });
    }
  });

}).call(this);

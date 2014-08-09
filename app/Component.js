
/*
Component
 */

(function() {
  jQuery.sap.declare("com.mitsuruog.sapui5.showroom.Component");

  sap.ui.core.UIComponent.extend("com.mitsuruog.sapui5.showroom.Component", {
    metadata: {
      routing: {
        config: {
          viewType: "JS",
          viewPath: "com.mitsuruog.sapui5.showroom.view",
          targetControl: "appConteiner",
          clearTarget: false,
          targetAggregation: "detailPages"
        },
        routes: [
          {
            pattern: "",
            name: "Menu",
            view: "Menu",
            viewLevel: 0,
            targetAggregation: "masterPages",
            subroutes: [
              {
                pattern: "",
                name: "Home",
                view: "Home",
                viewLevel: 1
              }, {
                pattern: "type",
                name: "Type",
                view: "Type",
                viewLevel: 1
              }, {
                pattern: "form",
                name: "Form",
                view: "Form",
                viewLevel: 1
              }, {
                pattern: "validation",
                name: "Validation",
                view: "Validation",
                viewLevel: 1
              }, {
                pattern: "table",
                name: "Table",
                view: "Table",
                viewLevel: 1
              }, {
                pattern: "fragment",
                name: "Fragment",
                view: "Fragment",
                viewLevel: 1
              }, {
                pattern: "{all*}",
                name: "NotFound",
                view: "NotFound"
              }
            ]
          }
        ]
      }
    },
    init: function() {
      var router;
      jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
      sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
      router = this.getRouter();
      this.routeHandler = new sap.m.routing.RouteMatchedHandler(router);
      return router.initialize();
    },
    destroy: function() {
      if (this.routeHandler) {
        this.routeHandler.destroy();
      }
      return sap.ui.core.UIComponent.prototype.destroy.apply(this, arguments);
    },
    createContent: function() {
      var view;
      view = sap.ui.view({
        id: "app",
        viewName: "com.mitsuruog.sapui5.showroom.view.App",
        type: "JS",
        viewData: {
          component: this
        }
      });
      return view;
    }
  });

}).call(this);

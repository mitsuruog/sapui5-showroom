(function() {
  jQuery.sap.declare("com.mitsuruog.sapui5.Component");

  sap.ui.core.UIComponent.extend("com.mitsuruog.sapui5.Component", {
    metadata: {
      routing: {
        config: {
          viewType: "JS",
          viewPath: "view",
          targetControl: "navConteiner",
          targetAggregation: "pages",
          clearTarget: false
        },
        routes: [
          {
            pattern: "",
            name: "First",
            view: "First",
            targetAggregation: "pages"
          }, {
            pattern: "second",
            name: "Second",
            view: "Second",
            targetAggregation: "pages"
          }, {
            pattern: "third/{id}/:tab?:",
            name: "Third",
            view: "Third",
            targetAggregation: "pages"
          }, {
            pattern: ":all*:",
            name: "NotFound",
            view: "NotFound",
            targetAggregation: "pages"
          }
        ]
      }
    },
    init: function() {
      var router;
      jQuery.sap.require("sap.ui.core.routing.History");
      jQuery.sap.require("sap.m.routing.RouteMatchedHandler");
      sap.ui.core.UIComponent.prototype.init.apply(this);
      router = this.getRouter();
      this.routerHandler = new sap.m.routing.RouteMatchedHandler(router);
      return router.initialize();
    },
    destory: function() {
      if (this.routerHandler) {
        this.routerHandler.destroy();
      }
      return sap.ui.core.UIComponent.prototype.destory.apply(this);
    },
    createContent: function() {
      this.view = sap.ui.view({
        id: "app",
        viewName: "view.App",
        type: sap.ui.core.mvc.ViewType.JS
      });
      return this.view;
    }
  });

}).call(this);

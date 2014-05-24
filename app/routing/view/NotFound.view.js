(function() {
  sap.ui.jsview("view.NotFound", {
    getControllerName: function() {
      return "view.NotFound";
    },
    createContent: function(oController) {
      this.page = new sap.m.Page({
        title: "NotFound Page",
        content: [
          new sap.m.Text({
            text: "404. This is not the web page you are looking for :(."
          }), new sap.m.Link({
            text: "Top page is here.",
            href: "./"
          })
        ]
      });
      return this.page;
    }
  });

}).call(this);

(function() {
  sap.ui.jsview("view.Second", {
    getControllerName: function() {
      return "view.Second";
    },
    createContent: function(oController) {
      var footer;
      this.page = new sap.m.Page({
        title: "Second Page",
        content: [
          new sap.m.Text({
            text: "Here is second page."
          })
        ]
      });
      footer = new sap.m.Bar({
        contentLeft: [
          new sap.m.Button({
            text: "back to page",
            press: [oController.back, oController]
          })
        ],
        contentRight: [
          new sap.m.Button({
            text: "go to next page",
            press: [oController.next, oController]
          })
        ]
      });
      this.page.setFooter(footer);
      return this.page;
    }
  });

}).call(this);

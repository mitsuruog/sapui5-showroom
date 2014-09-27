(function() {
  sap.ui.jsview("view.First", {
    getControllerName: function() {
      return "view.First";
    },
    createContent: function(oController) {
      var footer;
      this.page = new sap.m.Page({
        title: "First Page",
        content: [
          new sap.m.Text({
            text: "Here is first page."
          })
        ]
      });
      footer = new sap.m.Bar({
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

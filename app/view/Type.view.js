(function() {
  jQuery.sap.require("util.Type");

  sap.ui.jsview("view.Type", {
    getControllerName: function() {
      return "view.Type";
    },
    createContent: function(oController) {
      var input;
      this.page = new sap.m.Page({
        title: "custom type system",
        content: [],
        footer: []
      });
      input = new sap.m.Input("hoge");
      input.bindProperty("value", {
        path: "type>/hoge",
        type: new util.Type.hoge
      });
      this.page.addContent(input);
      this.page.addContent(new sap.m.Button({
        text: "chenck",
        press: [oController.press, oController]
      }));
      return this.page;
    }
  });

}).call(this);

(function() {
  sap.ui.controller("view.Type", {
    onInit: function() {
      var model;
      model = new sap.ui.model.json.JSONModel({
        hoge: "mitusurog"
      });
      this.getView().setModel(model, "type");
      return sap.ui.getCore().attachValidationError(function(oEvt) {
        var control;
        control = oEvt.getParameter("element");
        if (control && control.setValueState) {
          control.setValueState("Error");
          return jQuery.sap.log.error("view.Typeでエラーが発生したよん。");
        }
      });
    },
    press: function() {
      var input;
      input = sap.ui.getCore().getElementById("hoge");
      if (!input.getValue()) {
        return input.setValueState("Error");
      }
    }
  });

}).call(this);

(function() {
  sap.ui.controller("com.mitsuruog.sapui5.showroom.view.Controls", {
    onInit: function() {
      this.data = {
        name: "binding mitsuruog",
        hover: "not hovering."
      };
      this.model = new sap.ui.model.json.JSONModel();
      this.model.setData(this.data);
      return this.getView().setModel(this.model);
    },
    handleHover: function(evt) {
      this.data.hover = "hovering button is '" + (this.getText()) + "' :)";
      return this.getModel().setData({
        hover: "hovering button is '" + (this.getText()) + "' :)"
      }, true);
    }
  });

}).call(this);

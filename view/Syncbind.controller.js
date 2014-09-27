(function() {
  sap.ui.controller("com.mitsuruog.sapui5.showroom.view.Syncbind", {
    onInit: function() {
      var data;
      data = {
        basic: "synchronized together.",
        enabled: true,
        unset: "unset :(",
        list: [
          {
            id: 1,
            value: "type 0"
          }, {
            id: 2,
            value: "type 1"
          }, {
            id: 3,
            value: "type 2"
          }
        ]
      };
      this.model = new sap.ui.model.json.JSONModel();
      this.model.setData(data);
      return this.getView().setModel(this.model);
    },
    handleCheck: function(evt) {
      var enabled;
      enabled = evt.getParameter("selected");
      return this.model.setData({
        enabled: enabled
      }, true);
    },
    handleLiveChange: function(evt) {
      var text, value;
      text = this.getView().byId("synctext");
      value = evt.getParameter("newValue");
      if (value) {
        return text.bindText("/list/" + value + "/value");
      } else {
        return text.bindText("/unset");
      }
    }
  });

}).call(this);

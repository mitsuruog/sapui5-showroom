(function() {
  jQuery.sap.require("sap.m.MessageToast");

  sap.ui.controller("com.mitsuruog.sapui5.showroom.view.Fragment", {
    _fragments: {},
    _mode: "Detail",
    _getFragments: function(name) {
      if (!this._fragments[name]) {
        this._fragments[name] = sap.ui.jsfragment("com.mitsuruog.sapui5.showroom.util." + name, this);
      }
      return this._fragments[name];
    },
    _toggleFragment: function(name) {
      var container, fragment;
      fragment = this._getFragments(name);
      container = sap.ui.getCore().getElementById("fragContainer");
      container.removeContent(0);
      container.insertContent(fragment, 0);
      return this._mode = name;
    },
    onInit: function() {
      return this._toggleFragment("Detail");
    },
    openDialog: function(oEvt) {
      var dialog;
      dialog = this._getFragments("Dialog");
      return dialog.open();
    },
    pressedToggle: function(oEvt) {
      if (this._mode === "Detail") {
        return this._toggleFragment("Edit");
      } else {
        return this._toggleFragment("Detail");
      }
    },
    pressedOk: function(oEvt) {
      oEvt.getSource().getParent().close();
      return sap.m.MessageToast.show("pressed OK");
    },
    pressedNg: function(oEvt) {
      oEvt.getSource().getParent().close();
      return sap.m.MessageToast.show("pressed NG");
    }
  });

}).call(this);

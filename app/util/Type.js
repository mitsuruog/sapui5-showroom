(function() {
  jQuery.sap.declare("com.mitsuruog.sapui5.showroom.util.Type");

  sap.ui.model.SimpleType.extend("util.Type.hoge", {
    formatValue: function(oVal) {
      if (!oVal) {
        return "hoge";
      } else {
        return oVal;
      }
    },
    parseValue: function(oVal) {
      if (!oVal) {
        return "";
      } else {
        return oVal.replace(/hoge$/, "");
      }
    },
    validateValue: function(oVal) {
      if (!oVal) {
        jQuery.sap.require("sap.m.MessageToast");
        return sap.m.MessageToast.show("空とhogeはだめー:(");
      }
    }
  });

}).call(this);

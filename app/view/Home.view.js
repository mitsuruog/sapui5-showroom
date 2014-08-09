
/*
Home.view
 */

(function() {
  sap.ui.jsview("com.mitsuruog.sapui5.showroom.view.Home", {
    createContent: function(oController) {
      this.page = new sap.m.Page({
        title: "Home"
      });
      return this.page;
    }
  });

}).call(this);

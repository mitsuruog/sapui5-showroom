
/*
Locale.controller
 */

(function() {
  sap.ui.controller("com.mitsuruog.sapui5.showroom.view.Locale", {
    onInit: function() {
      var i18nModel;
      this.localeSelect = this.getView().byId("localeSelect");
      this.localeSelect.setSelectedKey(sap.ui.getCore().getConfiguration().getLanguage());
      i18nModel = new sap.ui.model.resource.ResourceModel({
        bundleUrl: "i18n/messageBundle.properties"
      });
      return this.getView().setModel(i18nModel, "i18n");
    },
    onChange: function(evt) {
      var locale;
      locale = evt.getParameters().selectedItem.getKey();
      return sap.ui.getCore().getConfiguration().setLanguage(locale);
    }
  });

}).call(this);

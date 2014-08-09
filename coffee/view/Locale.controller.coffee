###
Locale.controller
###
sap.ui.controller "com.mitsuruog.sapui5.showroom.view.Locale",

  onInit: ->
    @localeSelect = @getView().byId "localeSelect"
    @localeSelect.setSelectedKey sap.ui.getCore().getConfiguration().getLanguage()

    i18nModel = new sap.ui.model.resource.ResourceModel
      bundleUrl : "i18n/messageBundle.properties"
    @getView().setModel i18nModel, "i18n"

  onChange: (evt) ->
    locale = evt.getParameters().selectedItem.getKey()
    sap.ui.getCore().getConfiguration().setLanguage locale

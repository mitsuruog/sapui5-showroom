sap.ui.controller "com.mitsuruog.sapui5.showroom.view.Controls", 

  onInit: ->
    @data = 
      name: "binding mitsuruog"
      hover: "not hovering."
    
    @model = new sap.ui.model.json.JSONModel()
    @model.setData @data
    @getView().setModel @model

  handleHover: (evt) ->
    @data.hover = "hovering button is '#{@getText()}' :)"
    @getModel().setData
      hover: "hovering button is '#{@getText()}' :)"
    , true
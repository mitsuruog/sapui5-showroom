sap.ui.controller "com.mitsuruog.sapui5.showroom.view.Syncbind", 

  onInit: ->
    data = 
      basic: "synchronized together."
      enabled: true
      unset: "unset :("
      list: [
        {id: 1, value: "type 0"}  
        {id: 2, value: "type 1"}  
        {id: 3, value: "type 2"}  
      ]
    
    @model = new sap.ui.model.json.JSONModel()
    @model.setData data
    @getView().setModel @model
    
  handleCheck: (evt) ->
    enabled = evt.getParameter "selected"
    
    # [MEMO]setDataの第2引数をtrueにしないとmodelが初期化されてしまうので注意
    @model.setData
      enabled: enabled
    , true
    
  handleLiveChange: (evt) ->
    text = @getView().byId "synctext"
    value = evt.getParameter "newValue"
    if value then text.bindText "/list/#{value}/value" else text.bindText "/unset"
    
    
    
jQuery.sap.require "sap.m.MessageToast"

sap.ui.controller "view.Fragment",

  _fragments: {}
  _mode: "Detail"

  _getFragments: (name) ->
    #fragmentsを取得してキャッシュ
    unless @_fragments[name]
      @_fragments[name] = sap.ui.jsfragment "util.#{name}", @
    @_fragments[name]

  _toggleFragment: (name) ->
    fragment = @_getFragments name
    container = sap.ui.getCore().getElementById "fragContainer"
    #コンテナの0番目にfragmentsで取得したFormを追加します
    #[MEMO]ここではViewの中のContentはfragmentsのみの想定で書いています
    #[MEMO]Contentが複数ある場合は、removeContentとinsertContentのindexを変更してください
    container.removeContent 0
    container.insertContent fragment, 0
    @_mode = name

  onInit: ->
    @_toggleFragment "Detail"

  #ダイアログを表示します
  openDialog: (oEvt) ->
    dialog = @_getFragments "Dialog"
    dialog.open()

  #入力用と参照用のFormを切り替る処理
  pressedToggle: (oEvt) ->
    if @_mode is "Detail"
      @_toggleFragment "Edit"
    else
      @_toggleFragment "Detail"

  #ダイアログでOKをPressした時の処理
  pressedOk: (oEvt) ->
    oEvt.getSource().getParent().close()
    sap.m.MessageToast.show "pressed OK"

  #ダイアログでNGをPressした時の処理
  pressedNg: (oEvt) ->
    oEvt.getSource().getParent().close()
    sap.m.MessageToast.show "pressed NG"
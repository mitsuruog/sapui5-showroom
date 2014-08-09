jQuery.sap.declare "com.mitsuruog.sapui5.showroom.util.Type"

sap.ui.model.SimpleType.extend "util.Type.hoge",

  # Model->View時に処理される
  formatValue: (oVal) ->
    unless oVal then "hoge" else oVal

  # View->Model時に処理される
  # Modelには既にparseされた値が格納されている
  parseValue: (oVal) ->
    unless oVal then "" else oVal.replace /hoge$/, ""

  # UIコントロールにて何か入力したタイミングで処理される
  validateValue: (oVal) ->
    unless oVal
      jQuery.sap.require "sap.m.MessageToast"
      sap.m.MessageToast.show "空とhogeはだめー:("
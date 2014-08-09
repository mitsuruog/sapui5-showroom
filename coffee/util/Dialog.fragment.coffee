###
ダイアログ用のFragments
###
sap.ui.jsfragment "com.mitsuruog.sapui5.showroom.util.Dialog", 

  createContent: (oController) ->

    dialog = new sap.m.Dialog
      title: "Dialog"
      content: [
        #入力用のFragmentsを再利用します
        sap.ui.jsfragment "com.mitsuruog.sapui5.showroom.util.Edit", oController
      ]
      beginButton: new sap.m.Button
        type: "Accept"
        text: "OK"
        press: [oController.pressedOk, oController]
      endButton: new sap.m.Button
        text: "NG"
        press: [oController.pressedNg, oController]

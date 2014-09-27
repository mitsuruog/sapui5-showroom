
/*
ダイアログ用のFragments
 */

(function() {
  sap.ui.jsfragment("com.mitsuruog.sapui5.showroom.util.Dialog", {
    createContent: function(oController) {
      var dialog;
      return dialog = new sap.m.Dialog({
        title: "Dialog",
        content: [sap.ui.jsfragment("com.mitsuruog.sapui5.showroom.util.Edit", oController)],
        beginButton: new sap.m.Button({
          type: "Accept",
          text: "OK",
          press: [oController.pressedOk, oController]
        }),
        endButton: new sap.m.Button({
          text: "NG",
          press: [oController.pressedNg, oController]
        })
      });
    }
  });

}).call(this);

(function() {
  sap.ui.jsview("com.mitsuruog.sapui5.showroom.view.Syncbind", {
    getControllerName: function() {
      return "com.mitsuruog.sapui5.showroom.view.Syncbind";
    },
    createContent: function(oController) {
      var panel1, panel2, panel3;
      this.page = new sap.m.Page({
        title: "Data binding sample that synchronized between controls"
      });
      panel1 = new sap.m.Panel({
        headerText: "Sample of twoway data binding, such as angularjs",
        content: [
          new sap.m.Input({
            value: "{/basic}"
          }), new sap.m.Text({
            text: "{/basic}"
          })
        ]
      }, panel2 = new sap.m.Panel({
        headerText: "Sample of using a check box",
        content: [
          new sap.m.CheckBox({
            selected: "{/enabled}",
            text: "control the enabled the following",
            select: [oController.handleCheck, oController]
          }), new sap.m.Input({
            enabled: "{/enabled}"
          })
        ]
      }), panel3 = new sap.m.Panel({
        headerText: "Sample of aggregation data binding synchronized",
        content: [
          new sap.m.Text({
            text: "Type 0 to 2"
          }), new sap.m.Input({
            liveChange: [oController.handleLiveChange, oController]
          }), new sap.m.Text({
            id: this.createId("synctext"),
            text: "{/unset}"
          })
        ]
      }));
      this.page.addContent(panel1);
      this.page.addContent(panel2);
      this.page.addContent(panel3);
      return this.page;
    }
  });

}).call(this);

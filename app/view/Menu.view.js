
/*
Menu.view
 */

(function() {
  sap.ui.jsview("com.mitsuruog.sapui5.showroom.view.Menu", {
    getControllerName: function() {
      return "com.mitsuruog.sapui5.showroom.view.Menu";
    },
    createContent: function(oController) {
      var menuItems;
      this.page = new sap.m.Page({
        title: "Menu"
      });
      menuItems = [
        new sap.m.DisplayListItem({
          label: "Responsive form",
          value: "Form",
          type: "Navigation"
        }), new sap.m.DisplayListItem({
          label: "Form validation",
          value: "Validation",
          type: "Navigation"
        }), new sap.m.DisplayListItem({
          label: "Custom Type",
          value: "Type",
          type: "Navigation"
        }), new sap.m.DisplayListItem({
          label: "Fragment",
          value: "Fragment",
          type: "Navigation"
        })
      ];
      this.page.addContent(new sap.m.List({
        items: menuItems,
        itemPress: [oController.onItemPress, oController]
      }));
      return this.page;
    }
  });

}).call(this);

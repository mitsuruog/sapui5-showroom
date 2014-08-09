jQuery.sap.require "com.mitsuruog.sapui5.showroom.util.Type"

sap.ui.jsview "com.mitsuruog.sapui5.showroom.view.Type",

	getControllerName: -> "com.mitsuruog.sapui5.showroom.view.Type"

	createContent: (oController) ->

		@page = new sap.m.Page 
			title: "custom type system"

		input = new sap.m.Input "hoge"
		input.bindProperty "value",
			path: "type>/hoge"
			type: new util.Type.hoge

		@page.addContent input
		@page.addContent new sap.m.Button
			text: "chenck"
			press: [oController.press, oController]

		@page
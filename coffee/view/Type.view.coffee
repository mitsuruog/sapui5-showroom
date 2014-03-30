jQuery.sap.require "util.Type"

sap.ui.jsview "view.Type",

	getControllerName: ->
		"view.Type"

	createContent: (oController) ->

		@page = new sap.m.Page 
			title: "custom type system",
			content: [],
			footer: []

		input = new sap.m.Input "hoge"
		input.bindProperty "value",
			path: "type>/hoge"
			type: new util.Type.hoge

		@page.addContent input
		@page.addContent new sap.m.Button
			text: "chenck"
			press: [oController.press, oController]

		@page
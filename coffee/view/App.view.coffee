###
App.view
###
sap.ui.jsview "com.mitsuruog.sapui5.showroom.view.App",

	createContent: (oController) ->
		@setDisplayBlock true
		@app = new sap.m.SplitApp "appConteiner",
			afterDetailNavigate: ->
				@hideMaster()
			homeIcon:
				"phone": "img/57_iPhone_Desktop_Launch.png"
				"phone@2": "img/114_iPhone-Retina_Web_Clip.png"
				"tablet": "img/72_iPad_Desktop_Launch.png"
				"tablet@2": "img/144_iPad_Retina_Web_Clip.png"
				"favicon": "favicon.ico"
				"precomposed": false
		@app

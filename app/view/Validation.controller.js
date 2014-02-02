sap.ui.controller("view.Validation", {

	onInit: function() {

		var model = new sap.ui.model.json.JSONModel({
			input: '',
			email: '',
			url: '',
			tel: '',
			number: '',
			date: '',
			datetime: '',
			time: '',
			password: '',
			textarea: ''
		});
		this.getView().setModel(model);

		//[MEMO]app.controllerとかやった方がいい。
		// attach handlers for validation errors
		sap.ui.getCore().attachValidationError(function(evt) {
			var control = evt.getParameter("element");
			if (control && control.setValueState) {
				control.setValueState("Error");
				jQuery.sap.log.error("attachValidationError");
			}
		});

		sap.ui.getCore().attachValidationSuccess(function(evt) {
			var control = evt.getParameter("element");
			if (control && control.setValueState) {
				control.setValueState("None");
				jQuery.sap.log.info("attachValidationSuccess");
			}
		});

	},

	doCheck: function(evt) {

		var view = this.getView();
		var inputs = [
			'input',
			'email',
			'url',
			'tel',
			'number',
			'date',
			'datetime',
			'time',
			'password',
			'textarea'
		];
		inputs = jQuery.map(inputs, function(id) {
			return view.byId(id);
		})

		//何も入力しない場合、validationが動作していないので
		//入力されているかチェックする。
		jQuery.each(inputs, function (i, input) {
      if (!input.getValue()) {
        input.setValueState("Error");
      }
    });

		var canContinue = true;
		jQuery.each(inputs, function(i, input) {
			if ("Error" === input.getValueState()) {
				canContinue = false;
				return false;
			}
		});
	}

});
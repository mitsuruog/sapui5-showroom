sap.ui.jsview("view.Validation", {

	getControllerName: function() {
		return "view.Validation";
	},

	createContent: function(oController) {

		this.page = new sap.m.Page({
			title: "Form Validation",
			content: [],
			footer: []
		});

		var form = new sap.ui.layout.form.SimpleForm({
			minWidth: 1024,
			editable: true,
			content: [
				new sap.ui.core.Title({
					text: "validation"
				}),
				new sap.m.Label({
					text: 'Text'
				}),
				new sap.m.Input({
					id: this.createId('input'),
					type: sap.m.InputType.Text,
					placeholder: 'Enter Text ...',
					value: {
						path: '/input',
						type: 'sap.ui.model.type.String',
						constraints: {
							minLength: 1,
							maxLength: 10
						}
					}
				}),
				new sap.m.Label({
					text: 'Email'
				}),
				new sap.m.Input({
					id: this.createId('email'),
					type: sap.m.InputType.Email,
					placeholder: 'Enter Email ...',
					value: {
						path: '/email'
					}
				}),
				new sap.m.Label({
					text: 'Number'
				}),
				new sap.m.Input({
					id: this.createId('number'),
					type: sap.m.InputType.Email,
					placeholder: 'Enter Number ...',
					value: {
						path: '/number'
					}
				}),
				new sap.m.Label({
					text: 'Tel'
				}),
				new sap.m.Input({
					id: this.createId('tel'),
					type: sap.m.InputType.Tel,
					placeholder: 'Enter Telephone ...',
					value: {
						path: '/tel'
					}
				}),
				new sap.m.Label({
					text: 'URL'
				}),
				new sap.m.Input({
					id: this.createId('url'),
					type: sap.m.InputType.URL,
					placeholder: 'Enter URL ...',
					value: {
						path: '/url'
					}
				}),
				new sap.m.Label({
					text: 'Password'
				}),
				new sap.m.Input({
					id: this.createId('password'),
					type: sap.m.InputType.Password,
					placeholder: 'Enter Password ...',
					value: {
						path: '/password'
					}
				}),
				new sap.m.Label({
					text: 'Textarea'
				}),
				new sap.m.TextArea({
					id: this.createId('textarea'),
					placeholder: 'Enter Textarea ...',
					value: {
						path: "/textarea"
					}
				}),
				new sap.m.Label({
					text: 'Date'
				}),
				new sap.m.DateTimeInput({
					id: this.createId('date'),
					value: {
						path: '/date'
					}
				}),
				new sap.m.Label({
					text: 'Time'
				}),
				new sap.m.DateTimeInput({
					id: this.createId('time'),
					type: sap.m.DateTimeInputType.Time,
					value: {
						path: '/time'
					}
				}),
				new sap.m.Label({
					text: 'Datetime'
				}),
				new sap.m.DateTimeInput({
					id: this.createId('datetime'),
					type: sap.m.DateTimeInputType.DateTime,
					value: {
						path: '/datetime'
					}
				}),
			]
		});

		this.page.addContent(form);

		var footer = new sap.m.Bar({
			contentMiddle: [
				new sap.m.Button({
					text: "check",
					press: [oController.doCheck, oController]
				})
			]
		});

		this.page.setFooter(footer);

		return this.page;

	}
});
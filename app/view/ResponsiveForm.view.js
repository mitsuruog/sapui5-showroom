sap.ui.jsview("view.ResponsiveForm", {

	getControllerName: function() {
		return "view.ResponsiveForm";
	},

	createContent: function(oController) {

		this.page = new sap.m.Page({
			title: "Responsive Form",
			content: [],
			footer: []
		});

		var form = new sap.ui.layout.form.SimpleForm({
			minWidth: 1024,
			//[MEMO]editable=trueにした場合、Labelなどの入力コントロールでない項目に
			//入力コントロールと同じ分のline-heightが付与される。
			//ただ、hAlignがおかしいのでこのまま使っていいものか。。。
			editable: true,
			content: [
				new sap.ui.core.Title({
					text: "グループ１"
				}),
				new sap.m.Label({
					text: 'sap.m.Text'
				}),
				new sap.m.Text({
					text: 'これはテキスト'
				}),
				new sap.m.Label({
					text: 'sap.m.Label'
				}),
				//[MEMO]Labelが2つ連続する場合、その行は表示されない
				new sap.m.Label({
					text: 'これはラベル'
				}),
				new sap.m.Label({
					text: 'sap.m.Input'
				}),
				new sap.m.Input({
					type: sap.m.InputType.Text,
					placeholder: 'Enter Name ...'
				}),
				new sap.m.Label({
					text: 'sap.m.CheckBox'
				}),
				new sap.m.CheckBox({
					selected: true,
				}),
				new sap.m.Label({
					text: 'sap.m.CheckBox'
				}),
				new sap.m.CheckBox({
					text: 'check1',
					selected: true,
				}),
				new sap.m.CheckBox({
					text: 'check1',
					selected: true,
				}),
				new sap.m.CheckBox({
					text: 'check2',
					selected: true,
				}),
				new sap.m.CheckBox({
					text: 'check3',
					selected: true,
				}),
				new sap.m.CheckBox({
					text: 'check4',
					selected: true,
				}),
				new sap.m.Label({
					text: 'sap.m.RadioButton'
				}),
				new sap.m.RadioButton({
					text: "radio1",
					groupName: "GroupA",
					selected: true
				}),
				new sap.m.RadioButton({
					text: "radio2",
					groupName: "GroupA",
				}),
				new sap.m.RadioButton({
					text: "radio3",
					groupName: "GroupA",
				}),
				new sap.m.RadioButton({
					text: "radio4",
					groupName: "GroupA",
				}),
				new sap.m.RadioButton({
					text: "radio5",
					groupName: "GroupA",
				}),
				new sap.ui.core.Title({
					text: "グループ２"
				}),
				new sap.m.Label({
					text: 'sap.m.Select'
				}),
				new sap.m.Select({
					name: "select-name0",
					items: [
						oItem20 = new sap.ui.core.Item({
							key: "0",
							text: "item 0"
						}),

						oItem21 = new sap.ui.core.Item({
							key: "1",
							text: "item 1"
						}),

						oItem22 = new sap.ui.core.Item({
							key: "2",
							text: "item 2 is a little long"
						}),

						oItem23 = new sap.ui.core.Item({
							key: "3",
							text: "item 3"
						})
					],
				}),
				new sap.m.Label({
					text: 'sap.m.SearchField'
				}),
				new sap.m.SearchField({
					placeholder: "Search",
					search: [oController.doSearch, oController]
				}),
				new sap.m.Label({
					text: 'sap.m.TextArea'
				}),
				new sap.m.TextArea({
					placeholder: "Please add your comment",
					rows: 6,
					maxLength: 255,
					width: "100%"
				}),
			]
		});

		this.page.addContent(form);

		return this.page;

	}
});
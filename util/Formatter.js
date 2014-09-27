jQuery.sap.declare("util.Formatter");

util.Formatter = {

	weightState: function(value) {

		return value <= 1000 ? sap.ui.core.ValueState.Success : sap.ui.core.ValueState.Error;

	}

};
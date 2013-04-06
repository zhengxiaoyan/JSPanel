/**
 * @author zhang bing
 */
(function( window, undefined ) {
	
	var
	/** 
	Layout = function( options ) {
		// TODO
	}
	,
	*/
	/** provide common properties and methods */
	_control = function() {
		var me = this;
		if (!(this instanceof _control)) {
			me = new _control();
		}
		return me;
	}
	,
	Panel = function( options ) {
		var me = this;
		if (!(this instanceof Panel)) {
			me = new Panel( options );
		}
		// TODO
		return me;
	}
	,
	Component = function( options ) {
		var me = this;
		if (!(this instanceof Component)) {
			me = new Component();
		}
		// TODO
		return me;
	}
	,
	Button = function( options ) {
		var me = this;
		if (!(this instanceof Button)) {
			me = new Button();
		}
		// TODO
		return me;
	}
	// more components here.
	;
	
	_control.prototype = {
		/* properties */
		id: '',
		top: 0,
		left: 0,
		width: 0,
		height: 0,
		
		/* methods */
		add: function( controls ) {
			// TODO
		}
		,
		extend: function() {
			if ( arguments.length != 1 ) {
				return this;
			}
			
			var me = this;
			var arg = arguments[0];
			for (var name in arg) {
				if ( typeof arg[name] === 'object' ) {
					me[name] = ( arg[name].constructor === Array ) ? [] : {};
					me.extend( me[name] );
				} else {
					me[name] = arg[name];
				}
			}
			
			return me;
		}
	}
	
	Panel.prototype = (new _control()).extend({
		width: 400,
		height: 400
	});
	Panel.prototype.constructor = Panel;
	
	Component.prototype = new _control();
	Component.prototype.constructor = Component;
	
	Button.prototype = new Component();
	Button.prototype.constructor = Button;
	
	/** map controls to namespace. */
	var JSPanel = JSPanel || {};	// set namespace
	JSPanel.Panel = Panel;
	JSPanel.Component = Component;
	JSPanel.Button = Button;
	/** expose to global context. */
	window.JSPanel = JSPanel;
	
})( window );	// name space: JSPanel

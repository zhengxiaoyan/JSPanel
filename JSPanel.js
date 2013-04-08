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
	_control = function( ) {
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
		
		me.init( options );

		return me;
	}
	,
	Component = function( options ) {
		var me = this;
		if (!(this instanceof Component)) {
			me = new Component();
		}

		me.init( options );

		return me;
	}
	,
	Button = function( options ) {
		var me = this;
		if (this.constructor !== Button) {
			me = new Button();
		}

		me.init( options );

		return me;
	}
	// more components here.
	;
	
	_control.prototype = {
		/* map "static" properties "public" properties */
		init: function( options ) {
			this.id = this.id || 0;
			this.top = this.top || 0;
			this.left = this.left || 0;
			this.width = this.width || 0;
			this.height = this.height || 0;
			this.extend( options );
			return this;
		}
		,
		/* extends ability of this class */
		extend: function() {
			if ( arguments.length != 1 ) {
				return this;
			}
			
			var arg = arguments[0];
			for (var name in arg) {
				if ( typeof arg[name] === 'object' ) {
					this[name] = ( arg[name].constructor === Array ) ? [] : {};
					this.extend( me[name] );
				} else {
					this[name] = arg[name];
				}
			}
			
			return this;
		}
		,
		/* methods */
		add: function( controls ) {
			// TODO
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
	
	Object.spawn = function( p, options ) {
		function c( o ) {
			if ( !( this instanceof _control )) return null;
			p.call( this, o );
		};
		var t = (new p()).extend( options );
		c.prototype = t;
		return c;
	}
	
})( window );	// name space: JSPanel

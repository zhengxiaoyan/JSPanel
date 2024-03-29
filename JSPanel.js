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
	_control = function( f, o ) {
		var me = this;
		var con = f || _control;
		if (this.constructor !== con) {
			me = new con();
		}
		me.init( o );
		return me;
	}
	,
	Panel = function( options ) {
		return _control.call( this, Panel, options );
	}
	,
	Component = function( options ) {
		return _control.call( this, Component, options );
	}
	,
	Button = function( options ) {
		return _control.call( this, Button, options );
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
		extend: function( ifdeep, target, object ) {
			var
			copyto,
			cnt = 0,
			deep = false,
			arg = arguments[ cnt ];
			
			if ( arg == undefined ) {
				return this;
			}
			
			if ( typeof arg === "boolean" ) {
				deep = arg;
				arg = arguments[ ++ cnt ];
			}
			
			if ( arguments.length - cnt === 1 ) {
				copyto = this;
			} else {
				copyto = arg;
				arg = arguments[ ++cnt ];
			}
			
			for (var name in arg) {
				if ( deep && typeof arg[name] === 'object' ) {
					copyto[name] = copyto[name] || ( arg[name].constructor === Array ) ? [] : {};
					this.extend( deep, copyto[name], arg[name] );
				} else {
					copyto[name] = arg[name];
				}
			}
			
			return this;
		}
		,
		add: function( controls ) {
			// TODO
		}
	}
	_control.prototype.constructor = _control;
	
	Panel.prototype = (new _control()).extend({
		width: 400,
		height: 400
	})
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
	
	JSPanel.spawn = function( parent, options ) {
		function F( o ) {
			//if ( !( this instanceof _control )) return null;
			return _control.call( this, F, o );
		};
		F.prototype = ( new parent() ).extend( options );
		F.prototype.constructor = F;
		return F;
	}
	
	/** expose to global context. */
	window.JSPanel = JSPanel;
})( window );	// name space: JSPanel

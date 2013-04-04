/**
 * @author zhang bing
 */

(function( JSPanel, undefined ) { 
	
	var
	_control = function() {
		// do nothing
		// provide common properties and methods only
	}
	,
	panel = function( options ) {
		var me = {};
		
		if ( this === panel ) {
			me = this;
		} else {
			me = new panel( options )
		}
		
		// TODO
		
		return me;
	}
	,
	component = function( options ) {
		var me = {};
		
		if ( this === component ) {
			me = this;
		} else {
			me = new component( options )
		}
		
		// TODO
		
		return me;
	}
	,
	button = function( options ) {
		var me = {};
		
		if ( this === button ) {
			me = this;
		} else {
			me = new button( options )
		}
		
		// TODO
		
		return me;
	}
	;
	
	_control.prototype = {
		id: '',
		top: 0,
		left: 0,
		width: 0,
		height: 0
	}
	
	_control.prototype.extend = {
		// TODO
	}
	
	
	panel.prototype = new _control();
	panel.constructor = panel;
	panel.extend({
		add: function( component ) {
			// TODO
		}
		// TODO: other methods
	});
	
	component.prototype = new _control();
	component.constructor = component;
	component.extend({
		// TODO: add methods
	});
	
	button.prototype = new component();
	button.constructor = button;
	button.extend({
		// TODO: add methods
	});
	
	// map controls to global variants
	JSPanel.panel = panel;
	JSPanel.component = component;
	JSPanel.button = button;
	
})( JSPanel || {} );	// namespace: JSPanel

// deep copy sample from internet. for "extend" reference
function deepCopy(p, c) {  
  var c = c || {};   
  for (var i in p) {  
    if (typeof p[i] === 'object') {  
      c[i] = (p[i].constructor === Array) ? [] : {};   
      deepCopy(p[i], c[i]);  
    } else {  
      c[i] = p[i];   
    }   
  }  
  return c;  
}  

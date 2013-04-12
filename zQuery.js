(function( window, undefined ){
	var
	zQuery = function(){
		// TODO:
	};
	
	zQuery.prototype = {
		length: 0,
		splice: [].splice,
		push: [].push
	}
	
	window.$ = window.zQuery = zQuery;
})( window );

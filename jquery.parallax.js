/*
Plugin: jQuery Parallax
Version 1.0.0
Author: Ionuț Staicu
License: MIT
*/


(function( $, document ){
	if (!Object.create) { Object.create = function (o) { if (arguments.length > 1) { throw new Error('Object.create implementation only accepts the first parameter.'); } function F() {} F.prototype = o; return new F(); }; }

	var Parallax = {
		init: function( el, options ){
			this.el = $( el );
			this.win = $( window );

			this.options = options;

			this.appendBackground();

			this.win.on( 'resize', $.proxy( this.reInitialize, this ) );
			this.win.on( 'scroll', $.proxy( this.scroll, this ) );

			$( window ).on('re-parallax', $.proxy( this.reInitialize, this ) );
			$( window ).trigger('re-parallax');
		},


		reInitialize: function(){
			this.winHeight  = this.win.height();
			this.initialTop = this.el.offset().top;
			this.scroll();
		},


		appendBackground: function(){
			this.divBG = $('<div />');

			if( this.options.defaultStyling ){
				this.divBG.css({
					position       : 'absolute',
					background     : 'no-repeat center center fixed',
					backgroundSize : 'cover',
					width          : '100%',
					bottom         : 0,
					left           : 0,
					top            : 0,
					zIndex         : -1,
				});

				this.el.css( 'position', 'relative' );
			}

			this.divBG.css({
				backgroundImage: 'url(' + this.el.attr('data-image') + ')'
			});

			this.el.append( this.divBG );
		},

		scroll: function(){
			var scrollTop = this.win.scrollTop();
			var currentTop = this.el.offset().top;
			var height = this.el.outerHeight( true );
			var newYPos = Math.round( ( this.initialTop - scrollTop ) * this.options.speed );

			newYPos += 'px';

			if ( currentTop + height < scrollTop || currentTop > scrollTop + this.winHeight) {
				return;
			}

			this.divBG.css('backgroundPosition', [ '50%', newYPos ].join(' ') );
		},
	};


	$.fn.parallax = function( options ) {
		options = options || {};

		options = $.extend({
			speed         : 0.5,
			defaultStyling: true
		}, options );

		return this.each(function(){
			var obj = Object.create( Parallax );
			obj.init( this, options );
		});
	};
})( jQuery, document );



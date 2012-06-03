(function( $ ) {
  $.fn.absoluteGrid = function() {
    this.css("position", "relative");
    this.children().each(function() {
      //$(this).css("position", "absolute");
    });
  };
})( jQuery );

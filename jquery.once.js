(function($) {

  $.fn.once = function(identifier) {
    var className = "__processed_once_" + (typeof identifier === 'undefined' ? "" : identifier);
    return $(this).not("." + className).addClass(className);
  };

}(jQuery));
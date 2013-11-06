(function($) {
  $.fn.once = function(identifier, callback) {
    var $elems, className;
    if (typeof identifier === 'function') {
      callback = identifier;
      identifier = "";
    }
    className = "__processed_once_" + (typeof identifier === "undefined" ? "" : identifier);
    $elems = $(this).not("." + className).addClass(className);
    if (typeof callback === 'function') {
      $elems.each(callback);
    }
    return $elems;
  };
})(jQuery);
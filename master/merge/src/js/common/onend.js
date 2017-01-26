// callbacks on animation or transition ended
var onEnd = {
  animation : function(block, callback, delay) {
    setTimeout(function() {
      $(block).one('webkitAnimationEnd oanimationend msAnimationEnd animationend', callback);
    }, delay || 0);
  },
  transition : function(block, callback, delay) {
    setTimeout(function() {
      $(block).one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', callback);
    }, delay || 0);
  }
}

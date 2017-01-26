(function() {
  var $body = $('body'),
      $open = $('.js-sidebar-open'),
      $close = $('.js-sidebar-close');

  let sidebar = {
    open : function() {
      $body.addClass('is-sidebar-open');
    },
    close : function() {
      $body.removeClass('is-sidebar-open');
    },
    init : function() {
      $open.click(function(e) {
        e.preventDefault();
        sidebar.open();
      });
      $close.click(function(e) {
        e.preventDefault();
        sidebar.close()
      });

      // close on click outside of dropdown
      $(document).on('click', function(e) {
        if ( !$(e.target).closest('.sidebar').length && !$(e.target).closest('.sidebar__open').length) {
          sidebar.close();
        }
      });
    }
  }

  sidebar.init();
})();

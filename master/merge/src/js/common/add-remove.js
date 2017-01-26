(function() {

  $(document).on('click', '.js-add', function(e) {
    e.preventDefault();
    var $link = $(this),
        tmpl = templates.make($link.data('tmpl')),
        $target = $($link.data('target'));

        $target.append(tmpl)
  });

  $(document).on('click', '.js-remove', function(e) {
    e.preventDefault();
    var $link = $(this),
        $target = $link.closest($link.data('target'));

        $target.fadeOut(function() {
          $target.remove()
        });
  });
})()

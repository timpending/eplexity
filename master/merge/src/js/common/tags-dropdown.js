

$.fn.tagsDropdown = function( options ) {

    // This is the easiest way to have default options.
    var settings = $.extend({}, options );
    var $containers = $(this);

    function _createList(allowed, selected) {
      var $list = '';

      for (var i=0, max = allowed.length; i < max; i++) {
        var item = allowed[i],
            isSelected = selected.indexOf(item) >= 0 ? "is-selected" : '';

        $list += '<li class="tags-dropdown__item '+isSelected+'">'+item+'</li>';
      }

      return $list;
    }

    function _open($container) {
      $container.addClass('is-dropdown-open');
    }

    function _close($container) {
      $container.removeClass('is-dropdown-open');
    }

    function _select($dropdown, $input, allowed, index) {
      _mark($dropdown, index);
      $input.tagsinput('add', allowed[index]);
    }

    function _unselect($dropdown, $input, allowed, index) {
      _unmark($dropdown, index);
      $input.tagsinput('remove', allowed[index]);
    }

    function _mark($dropdown, index) {
      $dropdown.find('.tags-dropdown__item').eq(index).addClass('is-selected');
    }

    function _unmark($dropdown, index) {
      $dropdown.find('.tags-dropdown__item').eq(index).removeClass('is-selected');
    }

    // the collection based on the settings variable.
    return this.each(function() {
      if (!this.tagsdropdown) {
        this.tagsdropdown = true;

        var $container = $(this),
            $dropdown = $container.find('.tags-dropdown__list'),
            $input = $container.find('input');

        $input.tagsinput({
          trimValue: true
        });

        var allowed = $input.data('allowed').split(/\s*,\s*/);
        var selected = $input.val().split(/\s*,\s*/);


        $dropdown.append(_createList(allowed, selected));

        // check of allowed text in input
        $input.on('beforeItemAdd', function(event) {
          var index = allowed.indexOf(event.item);

          if ( index < 0) { event.cancel = true; }
        });

        $input.on('itemRemoved', function(event) {
          var index = allowed.indexOf(event.item);

          _unmark($dropdown, index) ;
        });

        //list item click
        $container.on('click', '.tags-dropdown__item', function(e) {
          var $item = $(this),
              index = $item.index();

          if ($item.is('.is-selected')) {
            _unselect($dropdown, $input, allowed,  index);
          } else {
            _select($dropdown, $input, allowed,  index);
          }
        });

        // open on focus outside of dropdown
        $container.on('focus', 'input', function() {
          _close($containers.not($container));
          _open($container);
        });

        // close on click outside of dropdown
        $(document).on('click', function(e) {
          if (!$(e.target).closest($container).length && !$(e.target).is('[data-role="remove"]')) {
            _close($container);
          }
        });
      }
    });

};

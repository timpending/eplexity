$(document).ready(function() {
  // Enable tooltips everywhere
  $('[data-toggle="tooltip"]').tooltip();


  //init dropdown tagsinput
  $('.js-tags-dropdown').tagsDropdown();

  // enable cards expand
  $('.js-card-expand').click(function(e) {
    e.preventDefault();
    var $card = $(this).closest('.card'),
        $inner = $card.find('.card__inner');

    $card.addClass('is-expanded');
    $inner.css({height : $inner[0].scrollHeight });

    onEnd.transition($inner, function() {
      $inner.css({height : 'auto'});
    });

  });

  // auto-grow for textarea
  function autoGrowTextarea(element) {
    element.style.height = "0px";
    element.style.height = (element.scrollHeight)+"px";
  }

  $(".js-auto-grow").keyup(function(){
    autoGrowTextarea(this);
  });
});

// Enable input autofocus for the modal windows. Without it its does not work because of tabindex="-1"
$('.modal').on('shown.bs.modal', function() {
  $(this).find('[autofocus]').focus();
});

// Enable copy text to clipboard
$(document).on('click', '.js-copy-clipboard', function(e) {
  e.preventDefault();
  var $btn = $('.js-copy-clipboard'),
  $icon = $btn.find("i"),
  input = document.getElementById($btn.data('target'));
  $btn.addClass("is-active");

  input.select();

  try {
    document.execCommand('copy')
    setTimeout(function() {
      $btn.removeClass('is-active');
    }, 700);
  } catch (err) {
    console.error('Unable to copy');
  }
});

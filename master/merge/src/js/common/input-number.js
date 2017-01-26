(function() {
  // bind increment and decrement for defined input number buttons
  function changeInputNumber(control) {
    var $control = $(control),
        $input = $control.closest('.input-number').find('input'),
        value = $input.val();


    if ($control.is('.input-number__button--inc')) {
      $input.val(++value).change();
    } else if (value != 0){
      $input.val(--value).change();
    }
  }

  $(document).on('click', '.input-number__button', function() {
    changeInputNumber(this);
  });
})()

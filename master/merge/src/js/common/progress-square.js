var ProgressSquare = function(container) {
  this.container = container;
  this.$container = $(this.container);
  this.$percentage = this.$container.find('.progress-square__percentage');
  this.$line = this.$container.find('.progress-square__line');
  this.percentage = this.$container.data('percentage') || 0;
}

ProgressSquare.prototype.update = function(num) {
  try{
    if (isNaN(parseInt(num)))
      throw new Error("Please enter a valid number")
    else if (num >100 || num < 0) {
      throw new Error("Sorry, but percentage must be between 0 and 100")
    } else {
      this.percentage = num;
      this.draw();
    }
  }
  catch(e){
    console.error(e.name+" "+e.message)
  }
}
ProgressSquare.prototype.draw = function() {
  var percent = this.percentage + '%';

  this.$percentage.html(percent);
  this.$line.css({width: percent});
}

ProgressSquare.prototype.reset = function() {
    this.update(0);
}

ProgressSquare.prototype.init = function() {
    this.draw();
}

// for example
// create new progress-square object (must be uniq )
$(window).load(function() {
  $('.progress-square').each(function() {
    this.progressSquare = new ProgressSquare(this);
    this.progressSquare.init();
  });

  // for update
  // var x = document.getElementById('add-provider-plan-progress')
  //     x.progressSquare.update(34)

});


// create new progress-square object (set width of completed 0-100% )
// addProgress.setPercentage(20);

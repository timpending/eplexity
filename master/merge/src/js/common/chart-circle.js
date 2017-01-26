var chartCircle = function(container) {
  this.$container = $(container);
  this.$circle = this.$container.find('.chart-circle__active');
  this.$max = this.$container.find('.js-chartcircle-max');
  this.$used = this.$container.find('.js-chartcircle-used');
  this.$available = this.$container.find('.js-chartcircle-available');
  this.max = this.$container.data('max');
  this.used = this.$container.data('used');
}

// update used value
chartCircle.prototype.setUsed = function(val) {
  try{
    if (isNaN(parseInt(val)))
      throw new Error("Please enter a valid number")
    else if (val > this.max || val < 0) {
      throw new Error("Sorry, but used value must be between 0 and " + this.max)
    } else {
      this.$used.html(val);
      this.used = val;
      this.$container.data('used', val);
      this.$available.html(this.max - this.used);
      this.draw();
    }
  }
  catch(e){
    console.error(e.name+" "+e.message)
  }
}

// update max value
chartCircle.prototype.setMax = function(val) {
  try{
    if (isNaN(parseInt(val)))
      throw new Error("Please enter a valid number")
    else if (val < this.used ) {
      throw new Error("Sorry, but max value must be bigger as used " + this.used)
    } else {
      this.$max.html(val);
      this.max = val;
      this.$container.data('max', val);
      this.$available.html(this.max - this.used);
      this.draw();
    }
  }
  catch(e){
    console.error(e.name+" "+e.message)
  }
}

// get percentage for used
chartCircle.prototype.calcPercentage = function() {
  var percentage = 100 - this.used * 100 / this.max ;

  return percentage;
}

// animate circle filled
chartCircle.prototype.draw = function() {
  var percentage = this.calcPercentage();

  this.$circle.removeClass('notransition').css({strokeDashoffset : percentage});
}

// redraw circle set to 0 and then to property
chartCircle.prototype.redraw = function() {
  var self = this;
  this.$circle.addClass('notransition').css({strokeDashoffset: 100});

  setTimeout(function() {
    self.draw();
  },300);
}

chartCircle.prototype.init = function() {
  this.$max.html(this.max);
  this.$used.html(this.used);
  this.$available.html(this.max - this.used);

  this.draw();
}

// init all chart-circle charts (add to el property chartCircle with functional)
$('.chart-circle').each(function() {
  this.chartCircle = new chartCircle(this);
  this.chartCircle.init();
});


// for example
//redraw after tab is active
$('[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  // get active tab
  var $tab = $(e.target.getAttribute('href'));

  $tab.find('.chart-circle').each(function() {
    this.chartCircle.redraw();
  });
});

// just for example
if ($('.chart-circle').length) {
  // update used
  $('.chart-circle')[0].chartCircle.setUsed(90);

  // update max
  $('.chart-circle')[0].chartCircle.setMax(900);
}

var ChartLine = function(container) {
  this.$container = $(container);
  this.$line = this.$container.find('.chart-line__active');
  this.$max = this.$container.find('.js-chartline-max');
  this.$used = this.$container.find('.js-chartline-used');
  this.$percentage = this.$container.find('.js-chartline-percentage');
  this.max = this.$container.data('max');
  this.used = this.$container.data('used');
  this.percentage = this.$container.data('percentage');
}

// update
ChartLine.prototype.update = function(values) {
  if (typeof values.used != 'undefined') {
    this.used = values.used;

    if (this.$used.length) {
      this.$used.html(this.used);
    }
  }

  if (typeof values.max != 'undefined') {
    this.max = values.max;

    if (this.$max.length) {
      this.$max.html(this.max);
    }
  }

  if (typeof values.percentage != 'undefined') {
    this.percentage = values.percentage;

    if (this.$percentage.length) {
      this.$percentage.html(this.percentage+"%");
    }
  }

  this.draw();
}


ChartLine.prototype.getPercentage = function() {
  return this.used * 100 / this.max;
}

// from zero if need start from 0
ChartLine.prototype.draw = function(fromZero) {
  var self = this,
      percentage = self.percentage,
      delay = 0;

  if (fromZero) {
    self.$line.addClass('notransition').css({width: 0});
    delay = 300;
  }

  setTimeout(function() {
    self.$line.removeClass('notransition').css({width: percentage+'%'});
  }, delay);
}


ChartLine.prototype.init = function() {
  if (this.$max.length && this.max) {
    this.$max.html(this.max);
  }
  if (this.$used.length && this.used) {
    this.$used.html(this.used);
  }

  if (!this.percentage) {
    this.percentage = this.getPercentage();
  }
  if(this.$percentage.length) {
    this.$percentage.html(this.percentage+"%");
  }

  this.draw(true);
}

// for example draw all chartlines immediatly after load
$(window).load(function() {
  $('.chart-line').each(function() {
    this.chartLine = new ChartLine(this);
    this.chartLine.init();
  });

  // update
  // document.getElementById('someId').chartLine.update({
  //   max : 100,
  //   used: 50
  // });

  // $('.chart-line')[0].chartLine.update({
  //   percentage  : 15
  // });
});

// for example redraw after tab is active
$('[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  // get active tab
  var $tab = $(e.target.getAttribute('href'));

  $tab.find('.chart-line').each(function() {
    this.chartLine.draw(true);
  });
});

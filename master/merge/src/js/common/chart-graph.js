  Chart.defaults.global.defaultFontColor = '#9b9b9b';
  Chart.defaults.global.defaultFontFamily = '"SFUIDisplay", Helvetica, Arial, sans-serif';
  Chart.defaults.global.defaultFontStyle = 'bold';
  Chart.defaults.global.maintainAspectRatio = false;
  Chart.defaults.global.pointHitDetectionRadius = 1;

  // default line config
  Chart.defaults.global.elements.line.borderWidth = 2;
  Chart.defaults.global.elements.line.borderColor = '#7460ee';
  Chart.defaults.global.elements.line.backgroundColor = 'rgba(116,96,238,.3)';
  Chart.defaults.global.elements.line.tension = 0;

  // default point config
  Chart.defaults.global.elements.point.radius = 4;
  Chart.defaults.global.elements.point.borderWidth = 2;
  Chart.defaults.global.elements.point.borderColor = '#7460ee';
  Chart.defaults.global.elements.point.hoverRadius = 6;

  // default tooltip config
  Chart.defaults.global.tooltips.mode = 'index';
  Chart.defaults.global.tooltips.position = 'nearest';
  Chart.defaults.global.tooltips.enabled = false;
  Chart.defaults.global.tooltips.bodyFontFamily = '"SFUIDisplay", Helvetica, Arial, sans-serif';
  Chart.defaults.global.tooltips.custom =  function(tooltip) {
    // Tooltip Element
    var tooltipEl = document.querySelector('.chart-graph__tooltip');
    if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.className = 'chart-graph__tooltip';
      tooltipEl.innerHTML = "<table></table>"
      document.body.appendChild(tooltipEl);
    }
    // Hide if no tooltip
    if (tooltip.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
    }
    // Set caret Position
    tooltipEl.classList.remove('above', 'below', 'no-transform');
    if (tooltip.yAlign) {
      tooltipEl.classList.add(tooltip.yAlign);
    } else {
      tooltipEl.classList.add('no-transform');
    }
    function getBody(bodyItem) {
      return bodyItem.lines;
    }
    // Set Text
    if (tooltip.body) {
      var titleLines = tooltip.title || [];
      var bodyLines = tooltip.body.map(getBody);
      var innerHtml = '<thead>';
      titleLines.forEach(function(title) {
        innerHtml += '<tr><th>' + title + '</th></tr>';
      });
      innerHtml += '</thead><tbody>';
      bodyLines.forEach(function(body, i) {
        var colors = tooltip.labelColors[i];
        var style = 'background:' + colors.backgroundColor;
        style += '; border-color: ' + colors.borderColor;
        var span = '<span class="chart-graph__key" style="' + style + '"></span>';
        innerHtml += '<tr><td>' + span + body + '</td></tr>';
      });
      innerHtml += '</tbody>';
      var tableRoot = tooltipEl.querySelector('table');
      tableRoot.innerHTML = innerHtml;
    }
    var position = this._chart.canvas.getBoundingClientRect();
    // Display, position, and set styles for font
    tooltipEl.style.opacity = 1;
    tooltipEl.style.left = position.left + tooltip.caretX + 'px';
    tooltipEl.style.top = position.top + tooltip.caretY + 15 + 'px';
    tooltipEl.style.fontSize = tooltip.fontSize;
    tooltipEl.style.fontStyle = tooltip._fontStyle;
    tooltipEl.style.padding = tooltip.yPadding + 'px ' + tooltip.xPadding + 'px';
  };




  // Legend
  Chart.defaults.global.legend = false;
  Chart.defaults.global.legendCallback = function(chart) {
    var legend = [];
       legend.push('<ul class="legend legend--row">');
       for (var i=0; i<chart.data.datasets.length; i++) {
         var item = chart.data.datasets[i];
           legend.push('<li class="legend__item"><span class="legend__dot" style="border-color:' + item.borderColor +'"></span>');
           if (item.label) {
              legend.push(item.label);
           }
           legend.push('</li>');
       }
       legend.push('</ul>');
       return legend.join("");
  }


  var ChartGraph = function(container) {
    this.container = container;
    this.$container = $(container);
    this.$legend = this.$container.find('.js-chart-graph-legend');
    this.$filterLinks = this.$container.find('.js-chart-graph-filter a');
    this.canvas = this.$container.find('canvas');
  }

  ChartGraph.prototype.init = function() {
    var self = this;

    if ( self.$container.length ) {
      self.draw('current');

      // click on chart filter
      this.$filterLinks.click(function(e) {
        e.preventDefault();
        self.$filterLinks.removeClass('is-active');
        var $filterCurrent = $(this),
            chartType = $filterCurrent.data('type');

        $filterCurrent.addClass('is-active');

        self.draw(chartType);
      });


      // redraw in active tab
      $('[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        // get active tab
        var $tab = $(e.target.getAttribute('href'));

        if ( $tab.find(self.$container).length ) {
          self.draw(self.type);
        }
      });
    }
  }

  ChartGraph.prototype.draw = function(chartType) {
    var self = this;

    // get promise
    self.getData(chartType).then(function(response) {
      if (self.chart) {
        self.chart.destroy();
      }

      self.chart = new Chart(self.canvas, {
        type: 'line',
        data: response.data,
        options : response.options
      });

      self.type = chartType;

      self.$legend.html(self.chart.generateLegend());
    }).catch(function(err) {
      console.error(err);
    });
  }

  ChartGraph.prototype.getData = function(chartType) {
    // you can add some data to container  and get it here for example id and url
    // var url = this.$container.data('url');
    // return $.ajax({
    //   method: "POST",
    //   url: url,
    //   data: { type: chartType, id: this.$container.data('id') }
    // });

    //fake async code
    return new Promise(function(resolve, reject) {
      var responseData;

      // chose the type data (simulate the server side logic)
      if (chartType == 'current') {
        responseData = {
          labels: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
          datasets: [{
            label: 'Mb of Bandwidth',
            data: [0, 50, 75, 100, 140, 110, 120, 125, 75, 70, 110, 80, 60 ],
            borderColor: 'rgba(116,96,238,1)',
            backgroundColor: 'rgba(116,96,238,.3)',
            pointBackgroundColor : '#fff',
          },
          {
            label: 'Mb of lost packets',
            data: [0, 150, 175, 120, 100, 100, 110, 165, 25, 20, 11, 60, 40 ],
            borderColor: 'red',
            backgroundColor: 'rgba(255,0,0,.3)',
            pointBackgroundColor : '#fff'
          }]
        };
      } else {
        responseData = {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Gb of bandwidth',
            data: [10, 215, 55, 103, 114, 191, 212, 412, 324, 345, 234, 123],
            borderColor: 'rgba(116,96,238,1)',
            backgroundColor: 'rgba(116,96,238,.3)',
            pointBackgroundColor : '#fff',
          },
          {
            label: 'Gb of lost packets',
            data: [0, 33, 150, 175, 120, 100, 100, 110, 364, 445, 634, 323 ],
            borderColor: 'red',
            backgroundColor: 'rgba(255,0,0,.3)',
            pointBackgroundColor : '#fff'
          }]
        };
      }

      // options for example getted from ajax response (not required)
      var responseOptions = {
        scales: {
          yAxes: [{
            ticks: {
              min: 0,
              suggestedMax :  300 ,
              beginAtZero:true
            }
          }]
        }
      };

      resolve({data : responseData, options : responseOptions})
    });
  }

  // just for example init chart graph
  if ( $('#monitoring-chart').length ){

    var cc = new ChartGraph('#monitoring-chart');
      cc.init();

  }

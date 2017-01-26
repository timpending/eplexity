// Servers. Contain data for the table and set of options
(function() {

  /* data for servers table
  /* key - "href" didn`t displayed, here we set link for each item
  */
  var dataSet = [
      {
        "name":"Server Name",
        "vm":"vmware.png",
        "ip-address":"54.93.182.207",
        "size":"x5",
        "datacenter":"EU (Frankfurt)",
        "status":['onhold', 'on hold'], // [status class suffix; status text ]
        "actions":"",
        "href":"server-details.html"
      },
      {
        "name":"Server Name",
        "vm":"vmware.png",
        "ip-address":"54.93.182.207",
        "size":"x5",
        "datacenter":"EU (Frankfurt)",
        "status":['active', 'active'],
        "actions":"",
        "href":"server-details.html"
      },
      {
        "name":"Server Name",
        "vm":"vmware.png",
        "ip-address":"54.93.182.207",
        "size":"x5",
        "datacenter":"EU (Frankfurt)",
        "status":['active', 'active'],
        "actions":"",
        "href":"server-details.html"
      },
      {
        "name":"Server Name",
        "vm":"vmware.png",
        "ip-address":"54.93.182.207",
        "size":"x5",
        "datacenter":"EU (Frankfurt)",
        "status":['active', 'active'],
        "actions":"",
        "href":"server-details.html"
      },
      {
        "name":"Server Name",
        "vm":"vmware.png",
        "ip-address":"54.93.182.207",
        "size":"x5",
        "datacenter":"EU (Frankfurt)",
        "status":['active', 'active'],
        "actions":"",
        "href":"server-details.html"
      }
  ];


  var options = {
    data: dataSet,
    autoWidth: false,
    pageLength: 5,
    createdRow: function (row, data, rowIndex) {
      var $row = $(row);
      // redirect to single page by clicking on item
      $row.click(function(e){
        // here .btn is element that shouldn't be clicked
        if (!$(e.target).closest('.btn').length) {
          window.location.href = data["href"];
        }
      });
    },
    dom: '<"dataTables_content nowrap row-clicked" t><"dataTables_bottom" p>',
    columnDefs: [
      {
        targets: 0,
        createdCell: function (td, cellData, rowData, row, col) {
          $(td).html('<h3>'+cellData+'</h3>');
        }
      },
      {
        targets: 1,
        createdCell: function (td, cellData, rowData, row, col) {
          $(td).html(templates.make('vm', {src : cellData}));
        }
      },
      {
        targets: 3,
        createdCell: function (td, cellData, rowData, row, col) {
          $(td).html(templates.make('size', {size : cellData}));
        }
      },
      {
        targets: 4,
        createdCell: function (td, cellData, rowData, row, col) {
          $(td).html(templates.make('datacenter', {dc : cellData}));
        }
      },
      {
        targets: 5,
        createdCell: function (td, cellData, rowData, row, col) {
          $(td).html(templates.make('statusServers', {statusClassSuffix : cellData[0], statusText : cellData[1]}));
        }
      },
      {
        targets: 6,
        createdCell: function (td, cellData, rowData, row, col) {
          $(td).html(templates.make('actions'));
        },
        orderable: false
      }
    ],
    // settings for column titles and custom classes
    columns: [
        { title: "Name", width: '25%', data: "name" },
        { title: "VM", data: "vm" },
        { className: "text-right-table", title: "IP Address",  data: "ip-address" },
        { className: "text-right-table", title: "Size", width : "80px", data: "size" },
        { title: "Datacenter", data: "datacenter" },
        { title: "Status", data: "status" },
        { className: 'text-xs-center hidden-grid', title: "Actions", data: "actions" },
    ]
  };




  // toogling the layout between table and grid
  function layoutToggleInit(table) {
  // toggle layout
  var $layoutToggle =  $('.js-layout-toggle'),
      $table = $(table);

    $layoutToggle.click(function() {
      var $this = $(this),
         layout = $this.data('layout');

      $layoutToggle.removeClass('is-active');
      $this.addClass('is-active');
      $table[0].className = $table[0].className.replace(/dataTable--.+/g, 'dataTable--'+layout);

    });
  }

  $(document).ready(function() {
    dataTableInit('#servers-table', options);
    layoutToggleInit('#servers-table');
  });

})()

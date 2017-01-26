
// public cloud data for the table and set of options
(function() {

  // [statusClassSuffix, statusText] - for status text
  // classSuffix see status.scss (active, onhold, waiting)
  // data for table
  var dataSet = [
    {
      "name" : "Data Store Name",
      "type": "AWS",
      "location" : "Frankfurt Cloud",
      "state" : "stopped",
      "type" : "SDD",
      "size" : "100 Gb",
      "available" : "75",
      "actions":"",
      "href":"storage-details.html"
    },
    {
      "name" : "Data Store Name",
      "type": "AWS",
      "location" : "Frankfurt Cloud",
      "state" : "stopped",
      "type" : "SDD",
      "size" : "100 Gb",
      "available" : "75",
      "actions":"",
      "href":"storage-details.html"
    },
    {
      "name" : "Data Store Name",
      "type": "AWS",
      "location" : "Frankfurt Cloud",
      "state" : "active",
      "type" : "SDD",
      "size" : "100 Gb",
      "available" : "15",
      "actions":"",
      "href":"storage-details.html"
    },
    {
      "name" : "Data Store Name",
      "type": "AWS",
      "location" : "Frankfurt Cloud",
      "state" : "active",
      "type" : "SDD",
      "size" : "100 Gb",
      "available" : "45",
      "actions":"",
      "href":"storage-details.html"
    },
    {
      "name" : "Data Store Name",
      "type": "AWS",
      "location" : "Frankfurt Cloud",
      "state" : "active",
      "type" : "SDD",
      "size" : "100 Gb",
      "available" : "35",
      "actions":"",
      "href":"storage-details.html"
    }
  ];

  // initialize datatable  with cells html customization
  var options = {
      data: dataSet,
      autoWidth: false,
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
      pageLength: 5,
      dom: '<"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<p class="text-semibold">'+cellData+'</p>');
          }
        },
        {
          targets: 1,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<p class="text-semibold">'+cellData+'</p>');
          }
        },
        {
          targets: 2,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<p class="text-semibold">'+cellData+'</p>');
          }
        },
        {
          targets: 3,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('state', {statusClassSuffix : cellData}));
          }
        },
        {
          targets: 4,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<p class="text-semibold">'+cellData+'</p>');
          }
        },
        {
          targets: 5,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<p class="text-semibold">'+cellData+'</p>');
          }
        },
        {
          targets: 6,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('chartLineSm', {percentage : cellData}));
          }
        },
        {
          targets: 7,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('actions'));
          },
          orderable: false
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Data Store Name", width: "25%", data: "name" },
          { title: "Type" , data: "type"},
          { title: "Location" , data: "location"},
          { title: "State" , className: "text-xs-center", data: "state"},
          { title: "Type",data: "type" },
          { title: "Size", className: "text-xs-center", data: "size" },
          { title: "Available" , data: "available"},
          { title: "Actions", className: "text-xs-center", data: "actions" }
      ]
  };

  $(document).ready(function() {
    dataTableInit('#public-cloud-table', options);
  });
})();



// private cloud data for the table and set of options
(function() {

  // [statusClassSuffix, statusText] - for status text
  // classSuffix see status.scss (active, onhold, waiting)
  // data for table
  var dataSet = [
    {
      "name" : "Data Store Name",
      "type": "AWS",
      "location" : "Frankfurt Cloud",
      "state" : "stopped",
      "type" : "SDD",
      "size" : "100 Gb",
      "available" : "75",
      "actions":"",
      "href":"storage-details.html"
    },
    {
      "name" : "Data Store Name",
      "type": "AWS",
      "location" : "Frankfurt Cloud",
      "state" : "stopped",
      "type" : "SDD",
      "size" : "100 Gb",
      "available" : "75",
      "actions":"",
      "href":"storage-details.html"
    },
    {
      "name" : "Data Store Name",
      "type": "AWS",
      "location" : "Frankfurt Cloud",
      "state" : "active",
      "type" : "SDD",
      "size" : "100 Gb",
      "available" : "15",
      "actions":"",
      "href":"storage-details.html"
    },
    {
      "name" : "Data Store Name",
      "type": "AWS",
      "location" : "Frankfurt Cloud",
      "state" : "active",
      "type" : "SDD",
      "size" : "100 Gb",
      "available" : "45",
      "actions":"",
      "href":"storage-details.html"
    },
    {
      "name" : "Data Store Name",
      "type": "AWS",
      "location" : "Frankfurt Cloud",
      "state" : "active",
      "type" : "SDD",
      "size" : "100 Gb",
      "available" : "35",
      "actions":"",
      "href":"storage-details.html"
    }
  ];

  // initialize datatable  with cells html customization
  var options = {
      data: dataSet,
      autoWidth: false,
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
      pageLength: 5,
      dom: '<"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<p class="text-semibold">'+cellData+'</p>');
          }
        },
        {
          targets: 1,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<p class="text-semibold">'+cellData+'</p>');
          }
        },
        {
          targets: 2,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<p class="text-semibold">'+cellData+'</p>');
          }
        },
        {
          targets: 3,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('state', {statusClassSuffix : cellData}));
          }
        },
        {
          targets: 4,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<p class="text-semibold">'+cellData+'</p>');
          }
        },
        {
          targets: 5,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<p class="text-semibold">'+cellData+'</p>');
          }
        },
        {
          targets: 6,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('chartLineSm', {percentage : cellData}));
          }
        },
        {
          targets: 7,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('actions'));
          }
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Data Store Name", width: "25%", data: "name" },
          { title: "Type" , data: "type"},
          { title: "Location" , data: "location"},
          { title: "State" , className: "text-xs-center", data: "state"},
          { title: "Type",data: "type" },
          { title: "Size", className: "text-xs-center", data: "size" },
          { title: "Available" , data: "available"},
          { title: "Actions", className: "text-xs-center", data: "actions" }
      ]
  };

  $(document).ready(function() {
    dataTableInit('#private-cloud-table', options);
  });
})();

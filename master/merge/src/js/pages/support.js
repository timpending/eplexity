// open tickets data for the table and set of options
(function() {

  // data for table
  // [statusClassSuffix, statusText] - for status text
  // classSuffix see status.scss (active, onhold, waiting)
  var dataSet = [
      [ "155", "Scheduled Maintenance on 24/12/2015", "09/28/2017", "Marie Barrett", ['active', 'open'] ],
      [ "1234", "Scheduled Maintenance on 24/12/2015", "09/28/2017", "Marie Jane", ['active', 'open'] ],
      [ "1234", "Scheduled Maintenance on 24/12/2015", "09/28/2017", "Marie Barrett", ['active', 'open'] ],
      [ "1234", "Scheduled Maintenance on 24/12/2015", "09/28/2017", "Marie Barrett", ['active', 'open'] ]
  ];

  // initialize datatable  with cells html customization
  var options = {
      data: dataSet,
      autoWidth: false,
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
            $(td).html('<p class="text-bold">'+cellData+'</p>');
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
            $(td).html('<p class="text-semibold">'+cellData+'</p>');
          }
        },
        {
          targets: 4,
          createdCell: function (td, cellData, rowData, row, col) {
              $(td).html(templates.make('status', {statusClassSuffix : cellData[0], statusText : cellData[1]}));
          }
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "ID", width: '5%' },
          { title: "Ticket name" },
          { title: "Created Date", width: '10%' },
          { title: "Creator", width: '10%' },
          { title: "Status", width: '10%' }
      ]
  };

  $(document).ready(function() {
    var table = dataTableInit('#open-tickets-table', options);
  });
})();




// closed tickets data for the table and set of options
(function() {

  // [statusClassSuffix, statusText] - for status text
  // classSuffix see status.scss (active, onhold, waiting)
  // data for table
  var dataSet = [
      [ "1234", "Scheduled Maintenance on 24/12/2015", "09/28/2017", "Marie Barrett",  ["onhold", "closed"]  ],
      [ "1234", "Scheduled Maintenance on 24/12/2015", "09/28/2016", "Marie Barrett",  ["onhold", "closed"]  ],
      [ "1234", "Scheduled Maintenance on 24/12/2015", "09/28/2017", "Marie Jane",  ["onhold", "closed"]  ],
      [ "1234", "Scheduled Maintenance on 24/12/2015", "09/28/2017", "Marie Barrett",  ["onhold", "closed"]  ]
  ];

  // initialize datatable  with cells html customization
  var options = {
      data: dataSet,
      autoWidth: false,
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
            $(td).html('<p class="text-bold">'+cellData+'</p>');
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
            $(td).html('<p class="text-semibold">'+cellData+'</p>');
          }
        },
        {
          targets: 4,
          createdCell: function (td, cellData, rowData, row, col) {
              $(td).html(templates.make('status', {statusClassSuffix : cellData[0], statusText : cellData[1]}));
          }
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "ID", width: '5%' },
          { title: "Ticket name" },
          { title: "Created Date", width: '10%' },
          { title: "Creator", width: '10%' },
          { title: "Status", width: '10%' }
      ]
  };

  $(document).ready(function() {
    dataTableInit('#closed-tickets-table', options);

  });
})();

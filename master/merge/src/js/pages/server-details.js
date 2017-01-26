// Server Details. Contain data for the table and set of options
(function() {

  // data for servers-details table
  var dataSet = [
      [ "Power off",       "jc@eplexity.com", "2 minutes ago", "14 seconds"],
      [ "Disable backups", "jc@eplexity.com", "10 days ago", "0 seconds"],
      [ "Disable backups", "jc@eplexity.com", "10 days ago", "0 seconds"]
  ];

  // initialize datatable for servers with cells html customization
  var options = {
      data: dataSet,
      autoWidth: false,
      pageLength: 5,
      dom: '<"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<p class="text-bold">'+cellData+'</p>');
          }
        },
        {
          targets: 1,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(cellData);
          }
        },
        {
          targets: 3,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(cellData);
          }
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "History event", width: '70%' },
          { title: "User" },
          { title: "Initiated"},
          { title: "Execution time"}
      ]
  };

  $(document).ready(function() {
    dataTableInit('#server-history-table', options);
  });
})();



// Server Backups. Contain data for the table and set of options
(function() {

  // data for servers-backups table
  var dataSet = [
      [ "Aug 14 2015", "1020 GiB", ""],
      [ "Sep 14 2015", "2020 GiB", ""],
      [ "Oct 14 2015", "920 GiB", ""]
  ];

  // initialize datatable for servers with cells html customization
  var options = {
      data: dataSet,
      autoWidth: false,
      pageLength: 5,
      dom: '<"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('folder', {dc: cellData}));
          }
        },
        {
          targets: 1,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(cellData);
          }
        },
        {
          targets: 2,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('actions'));
          },
          orderable: false
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Name", width: '80%' },
          { className: "text-right-table", title: "Size" },
          { className: 'text-xs-center', title: "Actions"},
      ]
  };

  $(document).ready(function() {
    dataTableInit('#server-backups-table', options);

  });
})();

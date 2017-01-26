// system-notices. Contain data for the table and set of options
(function() {

  // data system-notices table at dashboard.html
  var dataSet = [
      [ "error", "05/13/2017", "Cannot Deploy New servers", "CXOS is having an issue"],
      [ "info", "05/15/2017", "All Systems will be impacted", "CXOS will be conducting system maintenance on 12.24.2017 and will impact all system access."],
      [ "active", "05/19/2017", "All Systems will be impacted", "CXOS will be conducting system maintenance on 12.24.2017 and will impact all system access."]
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
            $(td).html(templates.make('state',{ statusClassSuffix: cellData}) );
          }
        },
        {
          targets: 1,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<time class="c-gray">'+cellData+'</time>');
          }
        },
        {
          targets: 2,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<p class="text-bold">'+cellData+'</p>');
          }
        },
        {
          targets: 3,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<p class="text-semibold text-wrap">'+cellData+'</p>');
          }
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "", width: '5%' },
          { title: "Date" },
          { title: "Title" },
          { title: "Text" }
      ]
  };

  $(document).ready(function() {
    dataTableInit('#system-notices', options);
  });
})();


// system-notices. Contain data for the table and set of options
(function() {

  // data system-notices table at dashboard.html
  var dataSet = [
      [ "Motion Control", "4", "4", "3500.00", "1750.00", "75"],
      [ "eLand", "4", "4", "3600.00", "750.00", "15"],
      [ "Motion Control", "4", "4", "7500.00", "1850.00", "45"],
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
            $(td).html(templates.make('state',{ statusClassSuffix: cellData}) );
            $(td).html('<p class="text-bold text-wrap">'+cellData+'</p>');
          }
        },
        {
          targets: 5,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('chartLineXs', {percentage : cellData}))
          }
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Name", width: "50%" },
          { title: "Clouds" , className: "text-xs-center"},
          { title: "Servers" , className: "text-xs-center"},
          { title: "Mly Budget, $", className: "text-xs-center" },
          { title: "Spent, $" },
          { title: "" }
      ]
  };

  $(document).ready(function() {
    dataTableInit('#consumption-table', options);
  });
})();

// Server Details. Contain data for the table and set of options
(function() {

  // data for servers-details table
  // {'text': "on hold", 'classSuffix': 'onhold'} - for status text
  // classSuffix see status.scss (active, onhold, waiting)
  var dataSet = [
      [ "Bittor", ["active", "deployed"], "1.1", ""],
      [ "Captain May I", ["onhold", "on hold"], "1.122", ""],
      [ "ExoVillage.com", ["waiting", "waiting"], "10.12", ""]
  ];

  // initialize datatable for servers with cells html customization
  var options = {
      data: dataSet,
      autoWidth: false,
      pageLength: 5,
      dom: '<"dataTables_content nowrap" t> <"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<span class="text-bold">' + cellData + '</span>');
          }
        },
        {
          targets: 1,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('status', {statusClassSuffix : cellData[0], statusText : cellData[1]}));
          }
        },
        {
          targets: 3,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('actions'));
          },
          orderable: false
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Application Name", width: '75%' },
          { title: "Status" },
          { title: "Version" },
          { className: 'text-xs-center', title: "Actions" }
      ]
  };

  $(document).ready(function() {
    dataTableInit('#application-stack-table', options);
  });
})();

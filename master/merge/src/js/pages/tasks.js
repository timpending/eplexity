// open tickets data for the table and set of options
(function() {

  // data for table
  // [statusClassSuffix, statusText] - for status text
  // classSuffix see status.scss (active, onhold, waiting)
  var dataSet = [
      [ "yPFNn1SRUo", "CXOS-VMW-Dev", ['active', 'open'], "Waiting for OVA file." ],
      [ "yPFNn1SRUo", "CXOS-VMW-Dev", ['waiting', 'waiting'], "Waiting for OVA file." ],
      [ "yPFNn1SRUo", "CXOS-VMW-Dev", ['active', 'open'], "Waiting for OVA file." ]
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
            $(td).html(templates.make('status', {statusClassSuffix : cellData[0], statusText : cellData[1]}));
          }
        },
        {
          targets: 3,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<p class="text-semibold">'+cellData+'</p>');
          }
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "ID", width: '55%' },
          { title: "Datacenter" },
          { title: "Status"},
          { title: "Detail"},
      ]
  };

  $(document).ready(function() {
    var table = dataTableInit('#tasks-table', options);
  });
})();

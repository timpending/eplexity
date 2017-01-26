// Network Dns. Contain data for the table and set of options
(function() {

  // data for Dns tab table at network.html
  var dataSet = [
      [ "Network security solutions", "Services and products that help you secure...", "", ""],
      [ "Network security solutions", "Services and products that help you secure...", "", ""],
      [ "Network security solutions", "Services and products that help you secure...", "", ""],
      [ "Network security solutions", "Services and products that help you secure...", "", ""],
      [ "Network security solutions", "Services and products that help you secure...", "", ""]
  ];

  // initialize datatable for dns at network.html with cells html customization
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
          targets: 2,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('statusSwitcher'));
          }
        },
        {
          targets: 3,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(cellData);
            $(td).html(templates.make('statusSwitcher'));
            $(td).html(templates.make('viewAllItems', { quantity: "220", href: "#"}));
          }
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Catalog Name", width: '40%' },
          { title: "Catalog Description" },
          { title: "Status" },
          { title: "Catalog Items" }
      ]
  };

  $(document).ready(function() {
    dataTableInit('#provider-plan-marketplace-table', options);
  });
})();

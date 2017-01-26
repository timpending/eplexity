// marketplaceOrdersTable data for the table and set of options
(function() {

  // data for  table
  var dataSet = [
      [ "Cisco Firewall", "12/25/2017", "$ 200.00"],
      [ "Network security solutions", "01/15/2017", "$ 200.00"],
      [ "Cisco Firewall", "12/20/2017", "$ 200.00"],
      [ "Cisco Firewall Cisco Firewall", "04/28/2017", "$ 200.00"],
      [ "Network security solutions", "03/31/2017", "$ 200.00"]
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
            $(td).html('<p class="text-bold">'+cellData+'</p>');
          }
        },
        {
          targets: 1,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html("<p class='text-semibold'>"+cellData+"</p>");
          }
        },
        {
          targets: 2,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html("<strong>"+cellData+"</strong>");
          }
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Item name", width: '80%' },
          { title: "Ordered Date" },
          { title: "Price", className: 'text-xs-right' }
      ]
  };

  $(document).ready(function() {
    dataTableInit('#marketplace-orders-table', options);
  });
})();

// cloudOrdersTable data for the table and set of options
(function() {

  // data for table
  var dataSet = [
      [ "Frankfurt Cloud", "AWS", "Public", "$ 100.20", "$ 700.00", "$ 100.20"],
      [ "Frankfurt Cloud Network security solutions", "VMware", "Public", "$ 100.20", "$ 700.00", "$ 100.20"],
      [ "Cisco Firewall Frankfurt Cloud", "OpenStack", "Public", "$ 100.20", "$ 700.00", "$ 100.20"],
      [ "Cisco Firewall Frankfurt Cloud", "Nutanix", "Public", "$ 100.20", "$ 700.00", "$ 100.20"],
      [ "Network Frankfurt Cloud solutions", "Azure", "Public", "$ 100.20", "$ 700.00", "$ 100.20"]
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
            $(td).html('<p class="text-bold">'+cellData+'</p>');
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
            $(td).html('<strong>'+cellData+'</strong>');
          }
        },
        {
          targets: 4,
          createdCell: function (td, cellData, rowData, row, col) {
              $(td).html('<strong>'+cellData+'</strong>');
          }
        },
        {
          targets: 5,
          createdCell: function (td, cellData, rowData, row, col) {
              $(td).html('<strong>'+cellData+'</strong>');
          }
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Cloud name", width: '50%' },
          { title: "Type" },
          { title: "Privacy" },
          { title: "Compute" },
          { title: "Storage" },
          { title: "Network" }
      ]
  };

  $(document).ready(function() {
    dataTableInit('#cloud-orders-table', options);
  });
})();

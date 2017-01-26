// Network Dns. Contain data for the table and set of options
(function() {

  // data for Dns tab table at network.html
  var dataSet = [
      [ "NS", "domain.com", "ns2.domain.com", "3600", ""],
      [ "TEXT", "domain.com", "ns2.domain.com", "3600", ""],
      [ "A", "domain.com", "ns2.domain.com,ns2.domain.com,ns2.domain.com", "3600", ""]
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
            $(td).html(cellData);
          }
        },
        {
          targets: 3,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(cellData);
          }
        },
        {
          targets: 4,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('networkDnsActions'));
          },
          orderable: false
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Type", width: '10%' },
          { title: "Name" },
          { title: "Content" },
          { title: "TTL" },
          { className: 'text-xs-center', title: "Actions" }
      ]
  };

  $(document).ready(function() {
    dataTableInit('#network-dns', options);
  });
})();


// Network Getaway. Contain data for the table and set of options
(function() {

  // data for Getaway tab table at network.html
  // [statusClassSuffix, statusText] - for status text
  // classSuffix see status.scss (active, onhold, waiting)
  var dataSet = [
      {
        "name":"GATEWAY A",
        "getawayIp":"54.93.182.207",
        "routerIp":"54.93.182.207",
        "size":"x1",
        "dataCenter":"EU (Frankfurt)",
        "status": ["active", "active"],
        "actions":"",
        "href":"getaway-details.html"
      },
      {
        "name":"GATEWAY A",
        "getawayIp":"54.93.182.207",
        "routerIp":"54.93.182.207",
        "size":"x3",
        "dataCenter":"EU (Frankfurt)",
        "status":  ["waiting", "waiting"],
        "actions":"",
        "href":"getaway-details.html"
      },
      {
        "name":"GATEWAY A",
        "getawayIp":"54.93.182.207",
        "routerIp":"54.93.182.207",
        "size":"x5",
        "dataCenter":"EU (Frankfurt)",
        "status": ["active", "active"],
        "actions":"",
        "href":"getaway-details.html"
      }
  ];

  // initialize datatable for getaway tab at network.html with cells html customization
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
      dom: '<"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<div class="text-bold"><img src="images/icons/gateway.svg" class="mr-1" />'+ cellData + '</div>');
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
            $(td).html(cellData);
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
            $(td).html(cellData);
          }
        },
        {
          targets: 5,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('status', {statusClassSuffix : cellData[0], statusText : cellData[1]}));
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
          { title: "Name", width: '20%', data: "name" },
          { title: "Gateway IP", data: "getawayIp"},
          { title: "Router IP", data: "routerIp"},
          { title: "Size", data: "size"},
          { title: "Datacenter", data: "dataCenter"},
          { title: "Status", data: "status"},
          { className: 'text-xs-center', title: "Actions", width: '10%', data: "href"}
      ]
  };

  $(document).ready(function() {
    dataTableInit('#network-getaway', options);
  });
})();



// Network Load Balancer. Contain data for the table and set of options
(function() {

  // data for Load balancer tab table at network.html
  var dataSet = [
      [ "ABC WEB APP LB", "My LB rule that balances traffic between Web01 and Web02 servers", "", ""],
      [ "ABC WEB APP LB", "My LB rule that balances traffic between Web01 and Web02 servers", "", ""],
      [ "ABC WEB APP LB", "My LB rule that balances traffic between Web01 and Web02 servers", "", ""]
  ];

  // initialize datatable for Load Balancer tab at network.html with cells html customization
  var options = {
      data: dataSet,
      autoWidth: false,
      pageLength: 5,
      dom: '<"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<div class="text-bold">'+ cellData + '</div>');
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
            $(td).html('<span class="text-bold"><img src="images/t_nginx.png" />' + cellData + '</span>');
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
          { title: "Rule", width: '20%' },
          { title: "Description", width: '60%' },
          { title: "Applied To", width: '10%' },
          { className: 'text-xs-center', title: "Actions", width: '10%' }
      ]
  };

  $(document).ready(function() {
    dataTableInit('#network-balancer', options);
  });
})();



// Network vpn. Contain data for the table and set of options
(function() {

  // data for von tab table at network.html
  var dataSet = [
      [ "192.168.1.10", "54.93.182.207", ["active", "active"], ""],
      [ "192.168.1.10", "54.93.182.207", ["active", "active"], ""],
      [ "192.168.1.10", "54.93.182.207:8080", ["waiting", "pending"], ""]
  ];

  // initialize datatable for dns tab at network.html with cells html customization
  var options = {
      data: dataSet,
      autoWidth: false,
      pageLength: 5,
      dom: '<"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<span class="text-bold"><img src="images/t_cisco.png" class="mr-2" />' + cellData + '</span>');
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
          { title: "Source IP", width: '65%' },
          { title: "Destination IP Address" },
          { title: "Status" },
          { className: 'text-xs-center', title: "Actions" }
      ]
  };

  $(document).ready(function() {
    dataTableInit('#network-vpn', options);
  });
})();



// Network Firewalls. Contain data for the table and set of options
(function() {

  // data for firewalls tab table at network.html
  // [statusClassSuffix, statusText] - for status text
  // classSuffix see status.scss (active, onhold, waiting)
  var dataSet = [
      [ "Demo Firewall Rules", "192.168.10.22/10:10", "192.168.10.22/10:10", ["active", "active"], ""],
      [ "Demo Firewall Rules", "192.168.10.22/10:10", "192.168.10.22/10:10", ["active", "active"], ""],
      [ "Demo Firewall Rules", "192.168.10.22/10:10", "192.168.10.22/10:10", ["waiting", "pending"], ""]
  ];

  // initialize datatable for firewalls tab at network.html with cells html customization
  var options = {
      data: dataSet,
      autoWidth: false,
      pageLength: 5,
      dom: '<"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<span class="text-bold"><img src="images/icons/firewall.svg" class="mr-2" />' + cellData + '</span>');
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
            $(td).html(cellData);
          }
        },
        {
          targets: 3,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('status', {statusClassSuffix : cellData[0], statusText : cellData[1]}));
          }
        },
        {
          targets: 4,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html(templates.make('actions'));
          },
          orderable: false
        }
      ],
      // settings for column titles and custom classes
      columns: [
          { title: "Name", width: '60%' },
          { title: "Source (port after colon)", width: '10%' },
          { title: "Destination (port after colon)", width: '10%' },
          { title: "Status" },
          { className: 'text-xs-center', title: "Actions", width: '10%' }
      ]
  };

  $(document).ready(function() {
    dataTableInit('#network-firewalls', options);
  });
})();


// Network Policy. Contain data for the table and set of options
(function() {

  // data for policy tab table at network.html
  var dataSet = [
      [ "Security policy name", "That's great, I was hoping it wouldn't happen right when it did happen, but now...", "", ""],
      [ "Security policy name", "That's great, I was hoping it wouldn't happen right when it did happen, but now...", "", ""],
      [ "Security policy name", "That's great, I was hoping it wouldn't happen right when it did happen, but now...", "", ""],
      [ "Security policy name", "That's great, I was hoping it wouldn't happen right when it did happen, but now...", "", ""]
  ];

  // initialize datatable for policy tab at netwirk.html with cells html customization
  var options = {
      data: dataSet,
      autoWidth: false,
      pageLength: 5,
      dom: '<"dataTables_content nowrap" t><"dataTables_bottom" p>',
      columnDefs: [
        {
          targets: 0,
          createdCell: function (td, cellData, rowData, row, col) {
            $(td).html('<div class="text-bold">'+ cellData + '</div>');
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
            $(td).html('<span class="text-bold"><img src="images/vmware.png" />' + cellData + '</span>');
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
          { title: "Name", width: '20%' },
          { title: "Description", width: '60%' },
          { title: "Cloud", width: '10%' },
          { className: 'text-xs-center', title: "Actions", width: '10%' }
      ]
  };

  $(document).ready(function() {
    dataTableInit('#network-policy', options);
  });
})();

// Network Dns. Contain data for the table and set of options
(function() {

  // initialize datatable for dns at network.html with cells html customization
  var options = {
      autoWidth: false,
      pageLength: 5,
      dom: '<"dataTables_content nowrap" t><"dataTables_bottom" p>',

      // settings for column titles and custom classes
      columns: [
          { title: "File\Folder Name", width: '70%' },
          { title: "Size", data: "size", width: '83px' },
          { title: "Date Modified", data: "date", width: '83px' },
          { className: 'text-xs-center', title: "Actions", data: "action", width: '83px' }
      ]
  };

  $(document).ready(function() {
    var table =  dataTableInit('#storage-details-table', options);
  });
})();

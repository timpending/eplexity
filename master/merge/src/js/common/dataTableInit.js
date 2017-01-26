// dataTableInit
// @description: initialize dataTables.bootstrap.js
// @parameters: container - set custom wrapper of the table
//              options - configurations for dataTables

function dataTableInit(container, options) {
  // initialize datatable for servers with cells html customization
  var $container = $(container);

  if ($container.length) {
    var table = $container.DataTable(options),
        $search = $(container+'-search');

    // bind datatable with search-input 
    if ($search.length) {
      $search.on( 'keyup', function () {
        table.search( this.value ).draw();
      });
    }

    return table;
  }
}

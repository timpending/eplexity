// templates for servers datatable
var templates = {
    vm  : '<div class="card__righttop"><img src="images/%src%" alt="" /></div>',
    size: '<span class="size"><img src="images/icons/%size%.svg" alt="" /> <strong>%size%</strong></span>',
    statusServers: '<div class="card__lefttop"><span class="status status--%statusClassSuffix%">%statusText%</span></div>',
    status: '<span class="status status--%statusClassSuffix%">%statusText%</span>',
    statusSwitcher: '<label class="switcher">\
      <input type="checkbox" class="switcher__input">\
      <span class="switcher__state">ON</span>\
      <span class="switcher__state">OFF</span>\
      <span class="switcher__current" data-on="ON" data-off="OFF"></span>\
    </label>',
    state: '<span class="status status--%statusClassSuffix%"></span>',
    chartLineSm: '<div class="chart-line chart-line--inline" data-percentage="%percentage%">\
      <strong class="chart-line__value js-chartline-percentage">%percentage%%</strong>\
      <div class="chart-line__line">\
        <div class="chart-line__active" ></div>\
      </div>\
    </div>',
    chartLineXs: '<div class="chart-line chart-line--inline" data-percentage="%percentage%">\
      <div class="chart-line__line">\
        <div class="chart-line__active" ></div>\
      </div>\
    </div>',
    datacenter: '<span class="hidden-table">Datacenter:</span> <span class="strong-grid">%dc%</span>',
    folder: '<h3><img src="images/icons/folder.svg" alt="" class="pr-1"/>%dc%</h3>',
    nicRow: '<tr>\
      <td>\
        <div class="select select--md">\
          <select name="" class="select__input form-control">\
            <option value="">vLAN2900</option>\
            <option value="">vLAN2900</option>\
            <option value="">vLAN2900</option>\
          </select>\
          <div class="select__button"></div>\
        </div>\
      </td>\
      <td>\
        <div class="select select--md">\
          <select name="" class="select__input form-control">\
            <option value="">VMXNET 3</option>\
            <option value="">VMXNET 3</option>\
            <option value="">VMXNET 3</option>\
          </select>\
          <div class="select__button"></div>\
        </div>\
      </td>\
      <td class="text-center">\
        <button class="btn btn-action js-remove" data-target="tr" title="Remove"><img src="images/icons/del.svg" alt=""></button>\
      </td>\
    </tr>',
    storageRow: '<tr>\
      <td>\
        <input type="text" name="name" placeholder="Disc 1" class="form-control">\
      </td>\
      <td class="text-left">DS1</td>\
      <td>\
        <div class="select">\
          <select name="" class="select__input form-control">\
            <option value="">200</option>\
            <option value="">400</option>\
            <option value="">600</option>\
          </select>\
          <div class="select__button">TB </div>\
        </div>\
      </td>\
      <td class="text-center">No Changes</td>\
      <td class="text-center">\
        <button class="btn btn-action js-remove" data-target="tr" title="Remove"><img src="images/icons/del.svg" alt=""></button>\
      </td>\
    </tr>',
    newVpnRow: '<tr>\
      <td>\
        <input type="text" class="form-control" placeholder="192.168.100.0">\
      </td>\
      <td class="text-center pl-0">\
        <input type="text" class="form-control" placeholder="255.255.255.0">\
      </td>\
      <td class="text-center">\
        <button class="btn btn-action js-remove" data-target="tr" title="Remove"><img src="images/icons/del.svg" alt=""></button>\
      </td>\
    </tr>',
    newPolicyRow: '<tr>\
      <td style="width: 20%;">\
        <div class="select select--simple">\
          <select name="" class="select__input form-control">\
            <option value="">SSH</option>\
            <option value="">SSH</option>\
            <option value="">SSH</option>\
          </select>\
          <div class="select__button"></div>\
        </div>\
      </td>\
      <td class="text-left">\
        <input type="text" class="form-control" placeholder="all">\
      </td>\
      <td>\
        <input type="text" class="form-control" placeholder="0-65553">\
      </td>\
      <td>\
        <div class="input-group">\
          <div class="input-group-btn">\
            <div class="select select--ingroup">\
              <select name="" class="select__input form-control">\
                <option value="">SSH</option>\
                <option value="">SSH</option>\
                <option value="">SSH</option>\
              </select>\
              <div class="select__button"></div>\
            </div>\
          </div>\
          <input type="text" class="form-control" aria-label="..." placeholder="0.0.0.0/0">\
        </div>\
      </td>\
      <td class="text-center">\
        <button class="btn btn-action js-remove" data-target="tr" title="Remove"><img src="images/icons/del.svg" alt=""></button>\
      </td>\
    </tr>',
    newVirtualNetworkRow: '<tr>\
      <td class="text-center pl-0">\
        <div class="select select--simple">\
          <select class="select__input form-control">\
            <option value="0">us-west-2c [172.31.0.0/20 (Maps to public IP)]</option>\
            <option value="1">us-west-2c [172.31.0.0/20 (Maps to public IP)]</option>\
            <option value="2">us-west-2c [172.31.0.0/20 (Maps to public IP)]</option>\
          </select>\
          <div class="select__button"></div>\
        </div>\
      </td>\
      <td class="text-center">\
        <button class="btn btn-action js-remove" data-target="tr" title="Remove"><img src="images/icons/del.svg" alt=""></button>\
      </td>\
    </tr>',
    actions: '<div class="btn-group">\
          <button class="btn btn-action dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="images/icons/gear.svg" alt="" /></button>\
          <ul class="dropdown-menu dropdown-menu--secondary">\
            <li><a href="#">RENAME</a></li>\
            <li><a href="#">EDIT</a></li>\
            <li><a href="#">REFRESH</a></li>\
            <li><a href="#">REMOVE</a></li>\
          </ul></div>',
    'serverName' : '<div class="row row--flex row--flex-middle mb-2 js-servername-row">\
              <div class="col-xs-11 col-sm-6 col-xl-3">\
                <label>Server <span>%num%</span> Name</label>\
                <input type="text" name="server_name_%num%" class="form-control">\
              </div>\
              <div class="col-xs-1 col-sm-6 col-xl-1 pt-2">\
                <a href="#" class="js-servername-remove" title="Remove Server %num% name"><img src="images/icons/del.svg" alt=""/></a>\
              </div>\
            </div>',
    viewAllItems: '<span>%quantity%<a href="%href%" class="link-arrow ml-2">View all </a></span>',
    networkDnsActions: '<div class="btn-group">\
          <button class="btn btn-action dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="images/icons/gear.svg" alt="" /></button>\
          <ul class="dropdown-menu dropdown-menu--secondary">\
            <li><a href="#">RENAME</a></li>\
            <li><a href="#">EDIT</a></li>\
            <li><a href="#">REFRESH</a></li>\
          </ul></div>',
    secondaryModalButton: '<button type="button" class="btn btn-secondary px-2" data-toggle="modal" data-target="%modalId%">%buttonText%</button>',
    secondaryDropdownButton: '<div class="dropdown"><button type="button" class="btn btn-secondary px-2" data-toggle="dropdown">%buttonText%<span class="caret"></span></button>%dropdown%</div>',


  make: function(templateName, data){
          return templates[templateName].replace(/%(\w*)%/g,function(m,key){return data.hasOwnProperty(key)?data[key]:"";});
        }
  };

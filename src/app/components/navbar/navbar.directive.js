export function NavbarDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/navbar/navbar.html',
    link: fnLink,
    scope: {
      cardCount: '='
    },
    controller: NavbarController,
    controllerAs: 'nvm'
  };

  return directive;

  function fnLink (scope, el, attr) {
    scope.nvm.cardCount = attr.totalList;
  }

}

class NavbarController {
  constructor ($scope, $location, homeService, cartService) {
    'ngInject';

    // "this.*" is available by directive option "bindToController: true"
    this.scope          = $scope;
    this.loc            = $location;
    this.homeSvc        = homeService;
    this.cartSvc        = cartService;
    this.widget_count   = this.cartSvc.cartData.length;

    this.navPosOk       = this.homeSvc.getSlidesState();
    this.isSearchActive = false;

    this.menus = {
      menu: [{
        id:0,
        active: true,
        sub: true,
        title: 'Catalogue'
      },{
        id:1,
        active: false,
        sub:true,
        title: 'Records'
      },{
        id:2,
        active: false,
        sub: false,
        title: 'News',
        fake_url:'/news',
        url:'app/views/news/news.html'
      },{
        id:3,
        active: false,
        sub: false,
        title: 'Contact',
        fake_url:'/contacts',
        url:'app/views/contacts/contacts.html'
      },{
        id:4,
        active: false,
        sub: false,
        title: 'About',
        fake_url:'/about',
        url:'app/views/about/about.html'
      }],
      submenu:  [{
        parentId:0,
        id:0,
        active:true,
        label: 'Catalogue',
        title: 'Ediciones Espiral Eterna',
        fake_url:'/catalog',
        url:'app/views/catalog/catalog.html'
      }, {
        parentId:0,
        id:1,
        active:false,
        label: 'Catalogue',
        title: 'General',
        fake_url:'/catalog',
        url:'app/views/catalog/catalog.html'
      }, {
        parentId:1,
        id:2,
        active:false,
        label: 'Records',
        title: 'Ediciones Espiral Eterna',
        fake_url:'/records',
        url:'app/views/records/records.html'
      }, {
        parentId:1,
        id:3,
        active:false,
        label: 'Records',
        title: 'General',
        fake_url:'/records',
        url:'app/views/records/records.html'
      }
      ]};

    this.init();
  }

  init() {
    this.widget_count = this.cartSvc.cartData.length;
    this.updateMenuActive();
  }


  getSubMenu(_parent_id) {
    let result = [];
    for (var i = 0; i < this.menus.submenu.length; i++) {
      if(this.menus.submenu[i].parentId == _parent_id){
        result.push(this.menus.submenu[i]);
      }
    }
    return result;

  }

  updateMenuActive() {
    // los desactiva todos
    for (var i = 0; i < this.menus.menu.length; i++) {
      this.menus.menu[i].active = false;
    }
    //activa al que se le dio click
    this.menus.menu[this.homeSvc.getCurrentMenu()].active = true;
  }

  navMenuClick(obj) {
    // carga la página
    this.homeSvc.current_nav_menu = obj.id;
    this.homeSvc.current_nav_url = obj.url;
    this.loc.path(obj.fake_url);

    // cerrar submenu cuando se está en responsive
    this.cerrarMenuResponsive();
  }

  subMenuClick(_where) {
    //------------ actualizar la info que se muestra
    this.actualizarInfo(_where);

    // desactiva el menú activo
    for (var m = 0; m < this.menus.menu.length; m++) {
      this.menus.menu[m].active = false;
    }
    // activa el menu padre del submenu
    this.menus.menu[_where.parentId].active = true;

    // cerrar submenu cuando se está en responsive
    this.cerrarMenuResponsive();
  }
  actualizarInfo(__menu) {
    // this.scope.$parent.vm.menuTitle = __menu.title;
    // primero ve sobre quién se da click y le dice la variable a cargar en consecuencia
    switch (__menu.id) {
      case 0:
        this.homeSvc.actual_menu = this.homeSvc.api_url_eee_menu;
        this.homeSvc.actual_cards = this.homeSvc.api_url_eee_cards;
        this.homeSvc.load_card_type = 0;
        this.scope.$parent.$parent.vm.actual_menu = 0; //para pedir el tipo de card
        this.scope.$parent.vm.setCards();
        break;
      case 1:
        this.homeSvc.actual_menu = this.homeSvc.api_url_gen_menu;
        this.homeSvc.actual_cards = this.homeSvc.api_url_gen_cards;
        this.homeSvc.load_card_type = 1;
        this.scope.$parent.$parent.vm.actual_menu = 1; //para pedir el tipo de card
        this.scope.$parent.vm.setCards();
        break;
      case 2:
        this.homeSvc.actual_menu = this.homeSvc.api_url_reee_menu;
        // this.homeSvc.actual_cards = this.homeSvc.api_url_reee_cards;
        // this.homeSvc.load_card_type = 0;
        // this.scope.$parent.$parent.vm.cards_in_category = 1;
        this.scope.$parent.vm.getRecords();
        break;
      case 3:
        this.homeSvc.actual_menu = this.homeSvc.api_url_rgen_menu;
        // this.homeSvc.actual_cards = this.homeSvc.api_url_rgen_cards;
        // this.scope.$parent.$parent.vm.cards_in_category = 2;
        this.scope.$parent.$parent.vm.getRecords();
        break;
    }
    // actualiza la página
    this.homeSvc.current_nav_menu = __menu.parentId;
    this.homeSvc.current_nav_url  = __menu.url;
    this.loc.path(__menu.fake_url);

    this.scope.$parent.vm.setMenu();

  }

  quitarActiveSearch() {
    this.cerrarMenuResponsive();
    this.isSearchActive = false;
  }

  cartSummaryClick() {
    // TODO Crear un modal diciendo que aún no se han agregado items al cart.
    let __items =  this.cartSvc.getItems();
    if(__items.length > 0){
      this.scope.$parent.vm.menuSelectedUrl = 'app/views/cart/cartSummary.html';
      // this.homeSvc.setCurrentNav('app/views/cart/cartSummary.html');
    }
    // cerrar submenu cuando se está en responsive
    this.cerrarMenuResponsive();
  }

  findClick() {
    //TODO capturar el enter key
    angular.element('#find #find_input').focus();
    this.isSearchActive = !this.isSearchActive;
  }

  cerrarMenuResponsive() {
    if(window.innerWidth < 992){
      angular.element('.navbar-toggle').click();
    }
  }

}

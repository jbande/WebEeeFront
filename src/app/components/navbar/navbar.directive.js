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

    this.navPosOk       = this.homeSvc.getSlidesState();
    this.isSearchActive = false;

    //TODO recibir el menú superior desde el server
    this.menus = {
      menu: [{
        id:0,
        active: true,
        sub: true,
        title: 'Catalogue',
        url:'/catalog.html'
      },{
        id:1,
        active: false,
        sub:true,
        title: 'Records',
        url:'/records.html'
      },{
        id:2,
        active: false,
        sub: false,
        title: 'News',
        url:'/news.html'
      },{
        id:3,
        active: false,
        sub: false,
        title: 'Contact',
        url:'/contacts.html'
      },{
        id:4,
        active: false,
        sub: false,
        title: 'About',
        url:'/about.html'
      }],
      submenu:  [{
        parentId:0,
        id:0,
        active:true,
        label: 'Catalogue',
        title: 'Ediciones Espiral Eterna',
        url:'app/views/catalog/catalog.html'
      }, {
        parentId:0,
        id:1,
        active:false,
        label: 'Catalogue',
        title: 'General',
        url:'app/views/catalog/catalog.html'
      }, {
        parentId:1,
        id:2,
        active:false,
        label: 'Records',
        title: 'Ediciones Espiral Eterna',
        url:'app/views/catalog/catalog.html'
      }, {
        parentId:1,
        id:3,
        active:false,
        label: 'Records',
        title: 'General',
        url:'app/views/catalog/catalog.html'
      }
      ]};

    this.init();
  }

  init() {
    if(window.innerWidth > "1366px"){
      angular.element('#find input').focus(()=>{
        angular.element( ".nav-menus" ).css('margin-right', "0em");
        this.isSearchActive = true;
      });

      angular.element('#find input').focusout(()=>{
        angular.element( ".nav-menus" ).css('margin-right', "3em");
        this.isSearchActive = false;
      });

      angular.element( "#find" ).hover(
        () => {
          angular.element( ".nav-menus" ).css('margin-right', "0em");
        },
        () => {
          if(!this.isSearchActive){
            angular.element( ".nav-menus" ).css('margin-right', "3em");
          }
        }
      );
    } else {
      this.isSearchActive = true;
    }

    /*if(!this.navPosOk){
      // angular.element('nav.navbar').addClass('animate');
      this.navPosOk = true;
    }*/
  }


  getSubMenu(_parent_id) {
    var result = [];
    for (var i = 0; i < this.menus.submenu.length; i++) {
      if(this.menus.submenu[i].parentId == _parent_id){
        result.push(this.menus.submenu[i]);
      }
    }
    return result;

  }

  navMenuClick(obj) {
    for (var i = 0; i < this.menus.menu.length; i++) {
      this.menus.menu[i].active = false;
      if(this.menus.menu[i].id == obj.id){
        this.menus.menu[i].active = true;
      }
    }
    // cerrar submenu responsive
    angular.element('.navbar-toggle').click();

    // carga la página
    console.log(obj.url);
    this.loc.path(obj.url);
    // this.scope.$parent.vm.menuSelectedUrl = obj.url;

  }

  subMenuClick(_where) {
    for (var i = 0; i < this.menus.submenu.length; i++) {
      this.menus.submenu[i].active = false;
      if(this.menus.submenu[i].id == _where.id){
        this.menus.submenu[i].active = true;
      }
    }

    //------------ actualizar la info que se muestra
    this.actualizarInfo(_where);

    // desactiva el menú activo
    for (var m = 0; m < this.menus.menu.length; m++) {
      this.menus.menu[m].active = false;
    }
    // activa el menu padre del submenu
    this.menus.menu[_where.parentId].active = true;

    this.scope.$parent.vm.menuSelectedUrl = 'app/views/catalog/catalog.html';

    // cerrar submenu cuando se está en responsive
    if(window.innerWidth < 768){
      angular.element('.navbar-toggle').click();
    }
  }
  actualizarInfo(__menu) {
    this.scope.$parent.vm.menuTitle = __menu.title;
    // primero ve sobre quién se da click y le dice la variable a cargar en consecuencia
    switch (__menu.id) {
      case 0:
        this.homeSvc.actual_menu = this.homeSvc.api_url_eee_menu;
        this.homeSvc.actual_cards = this.homeSvc.api_url_eee_cards;
        this.scope.$parent.vm.actual_menu = 0;
        break;
      case 1:
        this.homeSvc.actual_menu = this.homeSvc.api_url_gen_menu;
        this.homeSvc.actual_cards = this.homeSvc.api_url_gen_cards;
        this.scope.$parent.vm.actual_menu = 1;
        break;
      case 2:
        this.homeSvc.actual_menu = this.homeSvc.api_url_reee_menu;
        this.homeSvc.actual_cards = this.homeSvc.api_url_reee_cards;
        this.scope.$parent.vm.actual_menu = 0;
        break;
      case 3:
        this.homeSvc.actual_menu = this.homeSvc.api_url_rgen_menu;
        this.homeSvc.actual_cards = this.homeSvc.api_url_rgen_cards;
        this.scope.$parent.vm.actual_menu = 1;
        break;
    }
    // actualiza la página
    this.scope.$parent.vm.setMenu();
    this.scope.$parent.vm.setCards();
  }

  cartSummaryClick() {
    // TODO  Crear un modal diciendo que aún no se han agregado items al cart.
    if(this.cartSvc.getItems().length > 0){
      this.scope.$parent.vm.menuSelectedUrl = 'app/views/cart/cartSummary.html'
    }
    // cerrar submenu cuando se está en responsive
    if(window.innerWidth < 768){
      angular.element('.navbar-toggle').click();
    }
  }

}

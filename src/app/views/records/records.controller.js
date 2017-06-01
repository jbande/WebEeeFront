/**
 * Created by LEO'S on 20/05/2017.
 */

export class RecordsController {
  constructor ($scope, homeService, cartService) {
    'ngInject';

    this.scope          = $scope;
    this.homeSvc        = homeService;
    this.cartSvc        = cartService;
    this.menu_items     = [];

    this.inCart         = false;
    this.disc           = 0;
    this.btnTitle       = 'Add to cart';

    this.init();
  }

  init() {
  }

  loadInfo(menu) {
    this.menu_items = this.scope.$parent.$parent.vm.menus;
    for (var i = 0; i < this.menu_items.length; i++) {
      this.menu_items[i].active = false;
      if(this.menu_items[i].id == menu.id){
        // ponerle la clase active al que se le dio click
        this.menu_items[i].active = true;
        // actualiza el filtro
        this.disc = i;
      }
    }
  }

  addToCart(__item) {
    this.btnTitle = this.inCart ? 'Add to cart' : 'Remove';

    if(!this.inCart){
      this.cartSvc.addPdf(__item);
    } else {
      this.cartSvc.removePdf(__item.id);
    }

    // actualiza el widget
    this.scope.$parent.$parent.$parent.vm.updateCartInfo();

    // agrega o elimina
    this.inCart = !this.inCart;
  }


}



export function CardDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/card/card.html',
    link: fnLink,
    scope: {
      inCart: '=',
      updateCart: '&'
    },
    controller: CardController,
    controllerAs: 'cvm'
  };

  return directive;

  function fnLink(scope, el, attr){
    scope.cvm.img = attr.img;
    scope.cvm.title = attr.title;
    scope.cvm.format = attr.format;
    scope.cvm.collection = attr.collection;
    scope.cvm.crautor = attr.crautor;
    scope.cvm.credit = attr.credit;
    scope.cvm.de = attr.de;
    scope.cvm.cm = attr.cm;
    scope.cvm.rm = attr.rm;
    scope.cvm.dg = attr.dg;
    scope.cvm.pe = attr.pe;
    scope.cvm.price = attr.price;
    scope.cvm.id = attr.id;
    scope.cvm.inCart = scope.inCart;
  }

}

class CardController {
  constructor ($scope, $rootScope, cartService) {
    'ngInject';
    this.scope = $scope;
    this.rootScope = $rootScope;
    this.btnTitle = 'Add to cart';
    this.inCart = false;
    this.cartSvc = cartService;

    this.langDe = 'Dirección Editorial';
    this.langCm = 'Copia Musical';
    this.langRm = 'Revisión Musical';
    this.langDg = 'Diseño Gráfico';
    this.langPe = 'Primera Edición';


    this.init();
  }

  init() {
    this.setState();
  }

  addToCart() {
    this.btnTitle = this.inCart ? 'Add to cart' : 'Remove';

    if(!this.inCart){
      this.cartSvc.addPdf(this);
    } else {
      this.cartSvc.removePdf(this.id);
    }

    // actualiza el widget
    this.scope.$parent.$parent.$parent.$parent.$parent.vm.updateCartInfo();

    // agrega o elimina
    this.inCart = !this.inCart;
  }


  setState() {
    if(this.cartSvc.cartData.length > 0){
      var items = this.cartSvc.getItems();
      for (var i = 0; i < items.length; i++) {
        if(items[i].id == this.scope.$parent.card.id){
          this.btnTitle = 'Remove';
          this.inCart = !this.inCart;
        }
      }

    }
  }

  closeModal(modal_to_close) {
    angular.element('#modal'+modal_to_close.cvm.id).modal('hide');
  }

}

/**
 * Created by LEO'S on 19/05/2017.
 */

export class CartController {
  constructor($scope, cartService, $http) {
    'ngInject';
    this.scope = $scope;
    this.http = $http;
    this.cartSvc = cartService;

    this.cartData                 = this.cartSvc.getItems();
    this.checkout                 = false;
    this.checkout_msg             = 'To continue, we most to check your email:';

    this.back_btn                 = 'Back';
    this.checkout_btn             = 'Checkout';
    this.mail_placeholder         = 'Your mail here';

  }

  //cantidad de PDFs pedidos
  getItemCount () {
    var total = 0;
    return total = this.cartData.length;
  };

  //costo total
  getTotal() {
    var total = 0;
    for (var i = 0; i < this.cartData.length; i++) {
      total += parseFloat(this.cartData[i].price);
      console.log('total en GetTotal: ', total);
    }
    return total;
  };

  cardsToShow() {
    var _cards = [];
    var __where = this.scope.$parent.$parent.vm.cards;
    for (var i = 0; i < this.cartData.length; i++) {
      for (var m = 0; m < __where.length; m++) {
        if(this.cartData[i].id == __where[m].id){
          _cards.push(__where[m]);
        }
      }
    }
    return _cards;
  }

  checkoutClick() {
    if(this.checkout){
      // envío de la info
      this.http.post('http://192.168.0.100:3245/api/cart/create', {
        user_id: {
          email: this.mailCheckout
        },
        items_ids: {
          items: this.cartData
        }
      }, {
        withCredentials: true
      }).then ((data) => {
        console.log('éxito: ', data);
      }, (error) => {
        console.log('error:', error);
      }).finally(function () {
        console.log('completooooooo');
      });
    } else {
      this.checkout = true;
      this.checkout_btn = 'Place order';
    }

  }
}



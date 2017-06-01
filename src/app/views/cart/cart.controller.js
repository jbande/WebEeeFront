/**
 * Created by LEO'S on 19/05/2017.
 */

export class CartController {
  constructor($scope, homeService, cartService, $http) {
    'ngInject';
    this.scope = $scope;
    this.http = $http;
    this.homeSvc = homeService;
    this.cartSvc = cartService;

    this.cartData                 = this.cartSvc.getItems();
    this.checkout                 = false;
    this.checkout_end             = false;
    this.items                    = [];
    this.total                    = 0;
    this.input_labels             = [
      {label: 'Digital copy'},
      {label: 'Physical copy'}
    ];
    this.checkout_label           = 'Shipping info';
    this.modal_btns               = [
      {label: ''},
      {label: 'Continue shopping'}
    ];
    this.summary_label            = 'Cart summary';
    this.checkout_msg             = 'To continue, please fill the next information. We will send you a confirmation email.';
    this.placeholder              = {
      name: 'Name',
      mail: 'Mail',
      msg: 'Address'
    };
    this.errorMsg                 = [
      {errorMsg: 'You must fill this field'},
      {errorMsg: 'Please check this. It is not a valid email address'}
    ];

    this.summary_items            = [
      {label: 'Items:', total: 0},
      {label: 'Digital copies:', total: 0},
      {label: 'Physical copies:', total: 0},
      {label: 'Items to pay:', total: 0},
      {label: 'Digital copies price:', total: 0},
      {label: 'Physical copies price:', total: 0},
      {label: 'Shipping:', total: 0},
      {label: 'Subtotal:', total: 0},
      {label: 'Taxes (15%):', total: 0},
      {label: 'Total (+15% Tax)', total: 0}
    ];

    this.back_btn                 = 'Back';
    this.checkout_btn             = 'Checkout';
    this.mail_placeholder         = 'Your mail here';

    this.table_labels             = [
      {label: 'Title'},
      {label: 'Copies'},
      {label: 'Amount'},
      {label: 'Price'},
      {label: 'Subtotal'}
    ];

    this.msg_post_send            = 'Thanks for your buy. Check your mail.';

    this.init();
  }

  init() {
    this.itemsToShow();
  }

  itemsToShow() {
    let __items_cards = this.scope.$parent.$parent.vm.cards;
    let __items_records = this.scope.$parent.$parent.vm.records;
    let __items = __items_cards.concat(__items_records);

    for (var i = 0; i < this.cartData.length; i++) {
      for (var m = 0; m < __items.length; m++) {
        if(this.cartData[i].id == __items[m].id){
          this.items.push(__items[m]);
          this.items[i].digitalCount = 1;
          this.items[i].fisicoCount = 1;
          this.items[i].inDigital = false;
          this.items[i].inFisico = true;
          this.items[i].subTotal = this.items[i].price;
        }
      }
    }
    this.calculateSummary();
  }

  checkoutClick() {
    if(this.checkout){
      //muestra el modal
      this.msg_post_send = 'Sending order...';
      this.modal_btns[0].label = '';
      angular.element('#error_modal').modal('show');

      // envío de la info
      this.http.post(this.homeSvc.api_url_checkout, {
        user_id: {
          name: this.user_id,
          email: this.user_mail,
          shipping_address:this.user_address
        },
        items_ids: {
          items: this.items
        },
        summary: {
          Items: this.summary_items[0].total,
          Digital_copies: this.summary_items[1].total,
          Physical_copies: this.summary_items[2].total,
          Items_to_pay: this.summary_items[3].total,
          Digital_copies_price: this.summary_items[4].total,
          Physical_copies_price: this.summary_items[5].total,
          Shipping: this.summary_items[6].total,
          Subtotal: this.summary_items[7].total,
          Taxes: this.summary_items[8].total,
          Total: this.summary_items[9].total
        }
      }, {
        withCredentials: true
      }).then ((data) => {
        // console.log('éxito: ', data);
        this.checkout_end = true;
        this.msg_post_send = 'Thanks for your buy. Check your mail.';
        angular.element('#error_modal').modal('show');

      }, (error) => {
        this.checkout_end = false;
        this.modal_btns[0].label = 'Try again';
        this.msg_post_send = 'Sorry, we could not send your order. Please try again!';
        angular.element('#error_modal').modal('show');
      }).finally(function () {
        // console.log('completooooooo');
      });
    } else {
      this.checkout = true;
      this.summary_items[9].label = 'TOTAL';
      this.checkout_btn = 'Order';
    }

  }

  spinnerClick(_item, __action) {
    switch (__action) {
      case 'down':
        if(_item.fisicoCount > 1){
          _item.fisicoCount -= 1;
        }
        break;
      case 'up':
        _item.fisicoCount += 1;
        break;
    }
    this.calculateSummary();
  }

  calculateSummary() {
    this.total = 0;
    let __tempSubTotalD = 0;
    let __tempSubTotalF = 0;
    let _tempTotalD = 0;
    let _tempTotalF = 0;
    let _total_digital_price = 0;
    let _total_fisico_price = 0;

    //resetea todos los .total
    for (var m = 0; m < this.items.length; m++) {
      this.summary_items[m].total = 0;
    }

    // items
    this.summary_items[0].total = this.items.length;

    for (var i = 0; i < this.items.length; i++) {
      //calcular los items que tienen copia digital activado
      if(this.items[i].inDigital){
        _tempTotalD += this.items[i].digitalCount;
        _total_digital_price += this.items[i].digitalCount * this.items[i].price;
      }

      //calcular los items que tienen copia fisico activado
      if(this.items[i].inFisico){
        _tempTotalF += this.items[i].fisicoCount;
        _total_fisico_price += this.items[i].fisicoCount * this.items[i].price;
      }

      //actualizar la propiedad SubTotal de cada item en ITEMS
      __tempSubTotalD = this.items[i].inDigital ? this.items[i].digitalCount * this.items[i].price : 0;
      __tempSubTotalF = this.items[i].inFisico ? this.items[i].fisicoCount * this.items[i].price : 0;
      this.items[i].subTotal = __tempSubTotalD+__tempSubTotalF;
    }


    this.summary_items[1].total = _tempTotalD;
    this.summary_items[2].total = _tempTotalF;
    this.summary_items[3].total = _tempTotalD+_tempTotalF;
    this.summary_items[4].total = _total_digital_price;
    this.summary_items[5].total = _total_fisico_price;
    this.summary_items[7].total = _total_digital_price+_total_fisico_price;
    this.summary_items[8].total = this.summary_items[7].total*0.15;

    this.total = this.summary_items[9].total = this.summary_items[7].total+this.summary_items[8].total;

  }

  closeModal() {
    angular.element('#error_modal').modal('hide');
  }

  removeItem(_item) {
    // elimina
    this.cartSvc.removePdf(_item.id);

    //actualiza la variables en este controlador
    this.cartData = this.cartSvc.getItems();
    this.items = [];

    //actualiza el widget del navbar
    this.scope.$parent.$parent.$parent.vm.updateCartInfo();

    //actualiza la info en pantalla
    this.itemsToShow();
  }
}



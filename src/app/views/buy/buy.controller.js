/**
 * Created by LEO'S on 20/05/2017.
 */

export class BuyController {
  constructor($http, $routeParams) {
    'ngInject';

    this.routeParams  = $routeParams;
    this.http         = $http;
    this.id           = this.routeParams['id'];
    this.token        = this.routeParams['token'];
    this.loading_msg  = 'Cheking your request...';

    this.init();
  }

  init() {
    // envío de la info
    this.http.post('http://192.168.0.100:3245/api/cart/confirm', {
        cid: this.id,
        token: this.token
    }, {
      withCredentials: true
    }).then ((data) => {
      console.log('éxito: ', data);
    }, (error) => {
      console.log('error:', error);
    }).finally(function () {
      console.log('completooooooo');
    });
  }
}



/**
 * Created by LEO'S on 20/05/2017.
 */

export class BuyController {
  constructor($http, $routeParams, homeService) {
    'ngInject';

    this.routeParams  = $routeParams;
    this.http         = $http;
    this.homeSrvc     = homeService;
    this.id           = this.routeParams['id'];
    this.token        = this.routeParams['token'];
    this.loading_msg  = 'Cheking your request...';
    this.load_button  = 'Go to Home';
    this.server_response= false;

    this.init();
  }

  init() {
    // envío de la info
    this.Retry();
  }

  Retry() {
    this.http.post(this.homeSrvc.api_url_cart, {
      cid: this.id,
      token: this.token
    }, {
      withCredentials: true
    }).then ((data) => {
      console.log('data:', data.data[0].msg);
      switch (data.data[0].msg) {
        case 'ok': {
          this.loading_msg = 'Redirecting to Stripe...';
          break;
        }
        case 'expired': {
          this.loading_msg = 'This link has expired';
          this.server_response = true;
          break;
        }
        case 'not valid': {
          this.loading_msg = 'This link it is not valid';
          this.server_response = true;
          break;
        }
      }
    }, (error) => {
      console.log('error:', error);
      this.loading_msg = 'Error ' + error.error + '. We could not check your request. Please try again!';
      this.load_button = 'Try again';
    }).finally(function () {
      // console.log('completooooooo');
    });
  }
}



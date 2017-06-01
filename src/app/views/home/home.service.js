/**
 * Created by LEO'S on 23/04/2017.
 */
export class HomeService {
  constructor ($http) {
    'ngInject';
    this.http = $http;
    // this.api_url              = 'http://172.93.54.111:3245/';
    this.api_url              = 'http://192.168.0.101:3245/api/';

    this.api_url_eee_menu     = this.api_url + 'eee/collections/en';
    this.api_url_gen_menu     = this.api_url + 'gen/collections/en';
    this.api_url_eee_cards    = this.api_url + 'eee/works/en';
    this.api_url_gen_cards    = this.api_url + 'gen/works/en';

    this.api_url_reee_menu    = this.api_url + 'eee/records/titles';
    this.api_url_rgen_menu    = this.api_url + 'gen/records/titles';
    this.api_url_reee_cards   = this.api_url + 'eee/records/';
    this.api_url_rgen_cards   = this.api_url + 'gen/records/';

    this.api_url_news         = this.api_url + 'news/en';
    this.api_url_checkout     = this.api_url + 'cart/create';
    this.api_url_ticket       = this.api_url + 'ticket/create';
    this.api_url_cart         = this.api_url + 'cart/confirm';

    this.api_url_slides       = this.api_url + 'front-slides/en';
    this.api_url_demos        = this.api_url + 'front-demos/';
    this.slidesUp             = false;

    this.actual_cards         = this.api_url_eee_cards;
    this.actual_menu          = this.api_url_eee_menu;

    this.current_nav_menu     = 0;
    this.current_nav_url      = 'app/views/catalog/catalog.html';
    this.load_card_type       = 0;

  }

  getMenu () {
    return this.http.get(this.actual_menu).then((response)=> {
      let toReturn = {};
      toReturn.status = response.status;
      if(toReturn.status == 200){
        toReturn.success = true;
        toReturn.data = response.data;
      } else {
        toReturn.success = true;
        toReturn.data = response.data;
      }
      return toReturn;
    }, (response)=> {
      let toReturn = {};
      toReturn.success = false;
      toReturn.status = response.status;
      toReturn.error = response.error;
      return toReturn;
    });
  }
  getCards () {
    return this.http.get(this.actual_cards).then((response)=> {
      let toReturn = {};
      toReturn.status = response.status;
      if(toReturn.status == 200){
        toReturn.success = true;
        toReturn.data = response.data;
      } else {
        toReturn.success = true;
        toReturn.data = response.data;
      }
      return toReturn;
    }, (response)=> {
      let toReturn = {};
      toReturn.success = false;
      toReturn.status = response.status;
      toReturn.error = response.error;
      return toReturn;
    });
  }
  getNewsCards () {
    return this.http.get(this.api_url_news).then((response)=> {
      let toReturn = {};
      toReturn.status = response.status;
      if(toReturn.status == 200){
        toReturn.success = true;
        toReturn.data = response.data;
      } else {
        toReturn.success = true;
        toReturn.data = response.data;
      }
      return toReturn;
    }, (response)=> {
      let toReturn = {};
      toReturn.success = false;
      toReturn.status = response.status;
      toReturn.error = response.error;
      return toReturn;
    });
  }
  getAudioDemos () {
    return this.http.get(this.api_url_demos).then((response)=> {
      let toReturn = {};
      toReturn.status = response.status;
      if(toReturn.status == 200){
        toReturn.success = true;
        toReturn.data = response.data;
      } else {
        toReturn.success = true;
        toReturn.data = response.data;
      }
      return toReturn;
    }, (response)=> {
      let toReturn = {};
      toReturn.success = false;
      toReturn.status = response.status;
      toReturn.error = response.error;
      return toReturn;
    });
  }
  getRecords () {
    return this.http.get(this.api_url_reee_cards).then((response)=> {
      let toReturn = {};
      toReturn.status = response.status;
      if(toReturn.status == 200){
        toReturn.success = true;
        toReturn.data = response.data;
      } else {
        toReturn.success = true;
        toReturn.data = response.data;
      }
      return toReturn;
    }, (response)=> {
      let toReturn = {};
      toReturn.success = false;
      toReturn.status = response.status;
      toReturn.error = response.error;
      return toReturn;
    });
  }


  getSlides() {
    return this.http.get(this.api_url_slides).then((response)=> {
      let toReturn = {};
      toReturn.status = response.status;
      if(toReturn.status == 200){
        toReturn.success = true;
        toReturn.data = response.data;
      } else {
        toReturn.success = true;
        toReturn.data = response.data;
      }
      return toReturn;
    }, (response)=> {
      let toReturn = {};
      toReturn.success = false;
      toReturn.status = response.status;
      toReturn.error = response.error;
      return toReturn;
    });
  }

  getSlidesState () {
    return this.slidesUp;
  }

  getCurrentMenu() {
    return this.current_nav_menu;
  }
  getCurrentNav() {
    return this.current_nav_url;
  }
  setCurrentNav(_new_url) {
   this.current_nav_url = _new_url;
  }

  getActualMenu() {
    return this.load_card_type;
  }

}


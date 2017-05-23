/**
 * Created by LEO'S on 23/04/2017.
 */
export class HomeService {
  constructor ($http) {
    'ngInject';
    this.http = $http;
    this.api_url              = 'http://192.168.0.100:3245/api/';

    this.api_url_eee_menu     = this.api_url + 'eee/collections/en';
    this.api_url_gen_menu     = this.api_url + 'gen/collections/en';
    this.api_url_eee_cards    = this.api_url + 'eee/works/en';
    this.api_url_gen_cards    = this.api_url + 'gen/works/en';

    this.api_url_reee_menu    = this.api_url + 'eee/records/';
    this.api_url_rgen_menu    = this.api_url + 'gen/records/';
    this.api_url_reee_cards   = this.api_url + 'eee/records/';
    this.api_url_rgen_cards   = this.api_url + 'gen/records/';

    this.api_url_slides       = this.api_url + 'front-slides/en';
    this.slidesUp             = false;

    this.actual_cards         = this.api_url_eee_cards;
    this.actual_menu          = this.api_url_eee_menu;

  }

  /*getEeeCards (){
   return this.http.get(this.api_url_eee).then((response)=> {
   let toReturn = {};
   toReturn.status = response.status;
   if(toReturn.status = 200){
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
   };

   getGenCards () {
   return this.http.get(this.api_url_gen).then((response)=> {
   let toReturn = {};
   toReturn.status = response.status;
   if(toReturn.status = 200){
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
   }*/
  /*getEeeMenu () {
   return this.http.get(this.api_url_eee_col).then((response)=> {
   let toReturn = {};
   toReturn.status = response.status;
   if(toReturn.status = 200){
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

   getGenMenu () {
   return this.http.get(this.api_url_gen_col).then((response)=> {
   let toReturn = {};
   toReturn.status = response.status;
   if(toReturn.status = 200){
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
   }*/

  getMenu () {
    return this.http.get(this.actual_menu).then((response)=> {
      let toReturn = {};
      toReturn.status = response.status;
      if(toReturn.status = 200){
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
      if(toReturn.status = 200){
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
      if(toReturn.status = 200){
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

}


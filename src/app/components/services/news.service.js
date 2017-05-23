/**
 * Created by LEO'S on 27/04/2017.
 */
export class NewsService {
  constructor ($http) {
    'ngInject';

    this.http = $http;
  }

  getNewsCards () {
    return this.http.get('http://192.168.0.100:3245/api/news/en').then((response)=> {
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
  
}


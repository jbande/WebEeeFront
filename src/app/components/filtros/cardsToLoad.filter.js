/**
 * Created by LEO'S on 25/04/2017.
 */
export function cardsToLoadFilter() {
  'ngInject';
    return function(input, include) {
      var result = [];
      for (var i=0; i<input.length; i++) {
        if (input[i].collection_id == include) {
          result.push(input[i]);
        }
      }
      return result;
    };

}

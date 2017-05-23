/**
 * Created by LEO'S on 15/05/2017.
 */
export function menuToLoad() {
  'ngInject';
  return function(input, include) {
    var result = [];
    for (var i=0; i<input.length; i++) {
      if (input[i].collection == include) {
        result.push(input[i]);
      }
    }
    return result;
  };

}

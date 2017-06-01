/**
 * Created by LEO'S on 30/05/2017.
 */
export function filterTracks() {
  'ngInject';
  return function(input, include) {
    /*let result = [];
    for (var i = 0; i < input.length; i++) {
      if(input[i].id == include){
        result.push(input[i]);
      }
    }
    return result;*/
    return input.tracks;
  };

}

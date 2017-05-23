/**
 * Created by LEO'S on 24/04/2017.
 */
export function CutText() {
  'ngInject';
  return function (text, length) {
    return (text.length > length) ? text.substring(0, length) + '...' : text;

  }
}

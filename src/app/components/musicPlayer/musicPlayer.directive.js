export function MPlayerDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/musicPlayer/musicPlayer.html',
    link: fnLink,
    controller: MusicPlayerCtrl,
    controllerAs: 'mpvm'
  };

  return directive;

  function fnLink(scope, el, attr){

  }

}

class MusicPlayerCtrl {
  constructor ($scope) {
    'ngInject';
    this.scope = $scope;
  }


}

export function MPlayerDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/musicPlayer/musicPlayer.html',
    controller: MusicPlayerCtrl,
    controllerAs: 'mpvm'
  };

  return directive;


}

class MusicPlayerCtrl {
  constructor ($scope) {
    'ngInject';
    this.scope = $scope;
  }


}

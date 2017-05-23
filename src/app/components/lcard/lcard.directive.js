export function LCardDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/lcard/lcard.html',
    link: fnLink,
    scope: {
      cardInfo: '='
    },
    controller: LCardController,
    controllerAs: 'lcvm'
  };

  return directive;

  function fnLink(scope, el, attr){
    scope.lcvm.img = attr.img;
    scope.lcvm.title = attr.title;
    scope.lcvm.format = attr.format;
    scope.lcvm.collection = attr.collection;
    scope.lcvm.price = attr.price;
    scope.lcvm.id = attr.id;
    scope.lcvm.cardInfo = scope.cardInfo;
  }

}

class LCardController {
  constructor ($scope) {
    'ngInject';
    this.$scope = $scope;
    // this.cardInfo = [];
    this.btnTitle = 'Request';
    this.init();
  }

  init () {

  }

  Request(obj) {
    angular.log('enviado desde el request');
    angular.log(obj.cardInfo);
    this.$scope.$emit('requestInfo', obj);
  }

}

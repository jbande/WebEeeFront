export function VCardDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/vcard/vcard.html',
    link: fnLink,
    controller: VCardController,
    controllerAs: 'vcvm'
  };

  return directive;

  function fnLink(scope, el, attr){
    scope.vcvm.img = attr.img;
    scope.vcvm.title = attr.title;
    scope.vcvm.date = attr.date;
    scope.vcvm.desc = attr.description;
    scope.vcvm.id = attr.id;
  }

}

class VCardController {
  constructor ($scope, $location) {
    'ngInject';
    this.$scope = $scope;
    this.seeMore = "Más información";
    this.location = $location;
    // this.btnTitle = 'Ver más';
  }

  seeMoreClick() {
    this.location.path('www.prueba.com');
  }

}

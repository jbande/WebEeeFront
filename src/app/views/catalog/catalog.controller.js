/**
 * Created by LEO'S on 12/04/2017.
 */
export class CtgController {
  constructor ($scope, homeService) {
    'ngInject';

    this.scope          = $scope;
    this.homeSvc        = homeService;
    this.menu_items     = [];


    //TODO ver bien esto con Bande
    this.ddSelectOptions = [
      {opt: 'Recently added', value: 'id'},
      {opt: 'Title', value: 'title'},
      {opt: 'Price', value: 'price'},
      {opt: 'Popularity', value: 'popularity'}
    ];

    this.ddSelectSelected = {};

    this.init();
  }

  init() {
  }


  loadCards(menu) {
    this.menu_items = this.scope.$parent.$parent.vm.menus;
    for (var i = 0; i < this.menu_items.length; i++) {
      this.menu_items[i].active = false;
      if(this.menu_items[i].id == menu.id){
        // ponerle la clase active al click
        this.menu_items[i].active = true;

        // actualiza el filtro
        this.scope.$parent.$parent.vm.cards_in_category = menu.id;
      }
    }
  }

}





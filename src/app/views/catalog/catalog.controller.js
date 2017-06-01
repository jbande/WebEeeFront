/**
 * Created by LEO'S on 12/04/2017.
 */
export class CtgController {
  constructor ($scope, homeService) {
    'ngInject';

    this.scope            = $scope;
    this.homeSvc          = homeService;
    this.menu_items       = [];
    this.number_of_cards  = 0;
    this.label_numCards   = ' items in this collection';


    this.ddSelectOptions = [
      {opt: 'Recently added', value: 'created_at'},
      {opt: 'Title', value: 'title'},
      {opt: 'Price', value: 'price'}
    ];

    this.ddSelectSelected = {};

    this.init();
  }

  init() {
    // this.numberOfCards(0);
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
    this.numberOfCards(menu.id);

  }

  numberOfCards(__id) {
    this.number_of_cards = 0;
    let _cards = this.scope.$parent.$parent.vm.cards;
    for (var i = 0; i < _cards.length; i++) {
      if(__id == _cards[i].collection_id){
        this.number_of_cards += 1;
      }
    }

  }


}





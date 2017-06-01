/**
 * Created by LEO'S on 19/05/2017.
 */
export class CartService {
  constructor($location, homeService) {
    'ngInject';

    this.cartData = [];
    this.location = $location;
    this.homeSvc = homeService;

  }

  addPdf(__item) {
    var addedToExistingItem = false;
    for (var i = 0; i < this.cartData.length; i++) {
      if (this.cartData[i].id == __item.id) {
        // this.cartData[i].count++;
        addedToExistingItem = true;
        break;
      }
    }
    if (!addedToExistingItem) {
      this.cartData.push(
        {id: __item.id, price: __item.price}
      );
    }
  }

  removePdf(__id) {
    for (var i = 0; i < this.cartData.length; i++) {
      if (this.cartData[i].id == __id) {
        this.cartData.splice(i, 1);
        break;
      }
    }
    //TODO mejorar esto pues si abre un modal y da en REMOVE se queda el fade
    //retorna hacia la vista anterior cuando está vacío
    let __where_url = this.homeSvc.getCurrentNav();
    if (this.cartData.length == 0) {
      // this.scope.$parent.vm.menuSelectedUrl = 'app/views/catalog/catalog.html';
      // this.homeSvc.setCurrentNav('app/views/catalog/catalog.html');
      this.location.path('/home');
    }
  }

  getItems() {
    return this.cartData;
  }


}


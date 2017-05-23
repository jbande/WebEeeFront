/**
 * Created by LEO'S on 19/05/2017.
 */
export class CartService {
  constructor () {
    'ngInject';

    this.cartData = [];

  }

  addPdf (__item) {
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

  removePdf (__id){
    for (var i = 0; i < this.cartData.length; i++) {
      if (this.cartData[i].id == __id) {
        this.cartData.splice(i, 1);
        break;
      }
    }
  }

  getItems () {
    return this.cartData;
  }



}


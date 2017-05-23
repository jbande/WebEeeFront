/**
 * Created by LEO'S on 12/04/2017.
 */
export class HomeController {
  constructor ($scope, homeService, cartService) {
    'ngInject';
    this.scope = $scope;
    this.homeSvc = homeService;
    this.cartSvc = cartService;

    this.slides = [/*
     {image: './assets/images/bg2.jpg', autor: '@JC', frase: 'Si nos quedáramos cuarenta y ocho horas seguidas sin música, habría una catástrofe mundial'},
     {image: './assets/images/bg3.jpg', autor: '@JC', frase: 'Si de secretos profesionales se hablase, el mío ha sido hallar un verdadero equilibrio entre el máximo rigor y la pura alegría de la música como juego.'},
     {image: './assets/images/bg4.jpg', autor: '@JC', frase: 'En nuestro siglo, donde la relatividad de las cosas nos permite revivir siglos en minutos, y donde se aprecia la pequeñez del tiempo real de vida, bien merece la pena el disfrute de la cultura (historia) creada por el hombre.'},
     {image: './assets/images/bg1.jpg', autor: '@Kike Barona', frase: 'Los fenómenos teóricos se quedan cortos tratando de explicar hechos totales que parten de una visión unívoca del mundo. Yo compongo a partir de la relación entre el todo y las partes, entre el pequeño elemento sonoro y la obra completa. Esa relación es y depende de la teoría de contrarios. Es una expresión dialéctica.'}
     */];
    this.slidesUp = this.homeSvc.getSlidesState();

    this.menuSelectedUrl    = 'app/views/catalog/catalog.html';

    this.menuTitle          = '';
    this.menus              = [];
    this.cards              = [];
    this.actual_menu        = 0;
    this.cards_in_category  = 0;

    this.cartCount          = 0;

    this.url_facebook       = 'https://www.facebook.com/edicionesespiraleterna';
    this.url_instagram      = 'https://www.instagram.com/edicionesespiraleterna';
    this.url_twitter        = 'https://www.twitter.com/edicionesespiraleterna';


    this.error_global_msg   = "We really sorry! We couldn't connect with our servers.";
    this.error_global_btn   = "Please try again";
    this.error_trigger      = false;
    this.init();
  }

  init() {
    angular.element("html, body").scrollTop(0,0);
    this.setSlides();
    this.setMenu();
    this.setCards();
  }

  setSlides() {
    this.homeSvc.getSlides().then((response)=> {
      if (response.success) {
        this.slides = response.data;
      } else {
        this.error_trigger = true;
      }
    });
  }

  setMenu () {
    this.homeSvc.getMenu().then((response)=> {
      if (response.success) {
        this.menus = response.data;
        this.menus[0].active = true;
        this.cards_in_category = this.menus[0].id;
        this.menuTitle = this.menus[0].catalog;
      }
    });
  };
  setCards () {
    this.homeSvc.getCards().then((response)=> {
      if (response.success) {
        this.cards = response.data;
      }
    });
  };

  getTitle () {
    return this.menuTitle;
  }
  getMenu () {
    return this.menus;
  }
  getCards () {
    return this.cards;
  }


  updateCartInfo() {
    this.cartCount = this.cartSvc.cartData.length;
  }

/*
  updateCard (card){
    this.cardCount = 0;
    var _cardList = card.$scope.$parent.$parent.cc.cards;
    for (var i = 0; i < _cardList.length; i++) {
      var _card = _cardList[i];
      if(card.id == _card.id){
        _card.inCart = card.inCart;
      }

      this.cardCount += _card.inCart;

    }
  }
*/

  slideUp() {
    if(!this.slidesUp ){
      // angular.element('#start').toggleClass('animateUp');
      // angular.element('nav.navbar').toggleClass('animate');
      // angular.element('#menu-navbar-collapse').css('background-color', 'white');

      angular.element('body').css('overflow-y','auto');
      this.homeSvc.slidesUp = true;
      this.slidesUp = this.homeSvc.getSlidesState();
    }
  }

  slideDown() {
    if(this.slidesUp){
      angular.element("html, body").scrollTop(0,0);

      angular.element('body').css('overflow-y','hidden');
      this.homeSvc.slidesUp = false;
      this.slidesUp = this.homeSvc.getSlidesState();
    }

  }

}



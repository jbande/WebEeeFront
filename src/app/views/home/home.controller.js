/**
 * Created by LEO'S on 12/04/2017.
 */
export class HomeController {
  constructor ($scope, homeService, cartService, $location) {
    'ngInject';
    this.scope = $scope;
    this.location = $location;
    this.homeSvc = homeService;
    this.cartSvc = cartService;

    this.slides = [
      /*
       {image: './assets/images/bg2.jpg', autor: '@JC', frase: 'Si nos quedáramos cuarenta y ocho horas seguidas sin música, habría una catástrofe mundial'},
       {image: './assets/images/bg3.jpg', autor: '@JC', frase: 'Si de secretos profesionales se hablase, el mío ha sido hallar un verdadero equilibrio entre el máximo rigor y la pura alegría de la música como juego.'},
       {image: './assets/images/bg4.jpg', autor: '@JC', frase: 'En nuestro siglo, donde la relatividad de las cosas nos permite revivir siglos en minutos, y donde se aprecia la pequeñez del tiempo real de vida, bien merece la pena el disfrute de la cultura (historia) creada por el hombre.'},
       {image: './assets/images/bg1.jpg', autor: '@Kike Barona', frase: 'Los fenómenos teóricos se quedan cortos tratando de explicar hechos totales que parten de una visión unívoca del mundo. Yo compongo a partir de la relación entre el todo y las partes, entre el pequeño elemento sonoro y la obra completa. Esa relación es y depende de la teoría de contrarios. Es una expresión dialéctica.'}
       */
    ];
    this.slidesUp = this.homeSvc.getSlidesState();

    this.menuSelectedUrl    = this.homeSvc.getCurrentNav();

    this.menuTitle          = '';
    this.menus              = [];
    this.cards              = [];
    /*this.cards = [
     {id:0,
     img:"assets/images/3e1.jpg",
     title: "La ciudad de las columnas (2004)",
     format: "para guitarra",
     collection:'Colección Guitarra',
     de:'Isabelle Hernández',
     cm:'Maite Capote Ubals',
     rm:'Kiko Faxas',
     dg:'Alfredo Concepción',
     pe:'Marzo, 2009',
     crautor:'1986 Leo Brouwer',
     credit:'2007 Ediciones Espiral Eterna',
     price: "$12.50 €",
     inCart: 0
     },
     {id:1,
     img:"assets/images/3e4.jpg",
     title: "Paisajes, retratos y mujeres (1997)",
     format: "para guitarra",
     collection:'Colección Guitarra',
     de:'Isabelle Hernández',
     cm:'Maite Capote Ubals',
     rm:'Kiko Faxas',
     dg:'Alfredo Concepción',
     pe:'Marzo, 2009',
     crautor:'1986 Leo Brouwer',
     credit:'2007 Ediciones Espiral Eterna',
     price: "$20.50 €",
     inCart: 0
     },
     {id:2,
     img:"assets/images/3e61.jpg",
     title: "Paisaje cubano con fiesta (2007)",
     format: "para guitarra",
     collection:'Colección Guitarra',
     de:'Isabelle Hernández',
     cm:'Maite Capote Ubals',
     rm:'Kiko Faxas',
     dg:'Alfredo Concepción',
     pe:'Marzo, 2009',
     crautor:'1986 Leo Brouwer',
     credit:'2007 Ediciones Espiral Eterna',
     price: "$10.00 €",
     inCart: 0
     },
     {id:3,
     img:"assets/images/3e62.jpg",
     title: "Diez bocetos (2006)",
     format: "para piano",
     collection:'Colección Piano',
     de:'Isabelle Hernández',
     cm:'Maite Capote Ubals',
     rm:'Kiko Faxas',
     dg:'Alfredo Concepción',
     pe:'Marzo, 2009',
     crautor:'1986 Leo Brouwer',
     credit:'2007 Ediciones Espiral Eterna',
     price: "$12.50 €",
     inCart: 0},
     {id:4,
     img:"assets/images/3e35.jpg",
     title: "Suite Nº1 Antigua (1955)",
     format: "para piano",
     collection:'Colección Piano',
     de:'Isabelle Hernández',
     cm:'Maite Capote Ubals',
     rm:'Kiko Faxas',
     dg:'Alfredo Concepción',
     pe:'Marzo, 2009',
     crautor:'1986 Leo Brouwer',
     credit:'2007 Ediciones Espiral Eterna',
     price: "$10.00 €",
     inCart: 0},
     {id:5,
     img:"assets/images/3e21.jpg",
     title: "El arpa y la sombra (2005)",
     format: "para piano",
     collection:'Colección Piano',
     de:'Isabelle Hernández',
     cm:'Maite Capote Ubals',
     rm:'Kiko Faxas',
     dg:'Alfredo Concepción',
     pe:'Marzo, 2009',
     crautor:'1986 Leo Brouwer',
     credit:'2007 Ediciones Espiral Eterna',
     price: "$12.60 €",
     inCart: 0},
     {id:6,
     img:"assets/images/3e20.jpg",
     title: "Variaciones sobre un tema de Django Reinhardt (1984)",
     format: "para guitarra",
     collection:'Colección Guitarra',
     de:'Isabelle Hernández',
     cm:'Maite Capote Ubals',
     rm:'Kiko Faxas',
     dg:'Alfredo Concepción',
     pe:'Marzo, 2009',
     crautor:'1986 Leo Brouwer',
     credit:'2007 Ediciones Espiral Eterna',
     price: "$10.00 €",
     inCart: 0},
     {id:7,
     img:"assets/images/3e19.jpg",
     title: "El Decamerón negro (1981)",
     format: "para guitarra",
     collection:'Colección Guitarra',
     de:'Isabelle Hernández',
     cm:'Maite Capote Ubals',
     rm:'Kiko Faxas',
     dg:'Alfredo Concepción',
     pe:'Marzo, 2009',
     crautor:'1986 Leo Brouwer',
     credit:'2007 Ediciones Espiral Eterna',
     price: "$12.60 €",
     inCart: 0},
     {id:8,
     img:"assets/images/3e1.jpg",
     title: "From Yesterday to Penny Lane",
     format: "para guitarra y orquesta de cuerdas",
     collection:'Colección Música Orquestal',
     de:'Isabelle Hernández',
     cm:'Maite Capote Ubals',
     rm:'Kiko Faxas',
     dg:'Alfredo Concepción',
     pe:'Marzo, 2009',
     crautor:'1986 Leo Brouwer',
     credit:'2007 Ediciones Espiral Eterna',
     price: "$12.60 €",
     inCart: 0},
     {id:9,
     img:"assets/images/3e20.jpg",
     title: "Suite No. 1 (antigua)",
     format: "para guitarra",
     collection:'Colección Música Facsímile',
     de:'Isabelle Hernández',
     cm:'Maite Capote Ubals',
     rm:'Kiko Faxas',
     dg:'Alfredo Concepción',
     pe:'Marzo, 2009',
     crautor:'1986 Leo Brouwer',
     credit:'2007 Ediciones Espiral Eterna',
     price: "$12.60 €",
     inCart: 0},
     {id:10,
     img:"assets/images/3e19.jpg",
     title: "Cantilena de los bosques",
     format: "para guitarra",
     collection:'Colección Música Orquestal',
     de:'Isabelle Hernández',
     cm:'Maite Capote Ubals',
     rm:'Kiko Faxas',
     dg:'Alfredo Concepción',
     pe:'Marzo, 2009',
     crautor:'1986 Leo Brouwer',
     credit:'2007 Ediciones Espiral Eterna',
     price: "$12.60 €",
     inCart: 0},
     {id:11,
     img:"assets/images/3e35.jpg",
     title: "Doble Concierto 'Omaggio a Paganini'",
     format: "para guitarra, violín y arcos",
     collection:'Colección Música de Cámara',
     de:'Isabelle Hernández',
     cm:'Maite Capote Ubals',
     rm:'Kiko Faxas',
     dg:'Alfredo Concepción',
     pe:'Marzo, 2009',
     crautor:'1986 Leo Brouwer',
     credit:'2007 Ediciones Espiral Eterna',
     price: "$12.60 €",
     inCart: 0},
     {id:12,
     img:"assets/images/3e62.jpg",
     title: "Gismontiana",
     format: "para coro mixto",
     collection:'Colección Música Coral',
     de:'Isabelle Hernández',
     cm:'Maite Capote Ubals',
     rm:'Kiko Faxas',
     dg:'Alfredo Concepción',
     pe:'Marzo, 2009',
     crautor:'1986 Leo Brouwer',
     credit:'2007 Ediciones Espiral Eterna',
     price: "$12.60 €",
     inCart: 0}
     ];*/
    this.records            = [];
    this.actual_menu        = this.homeSvc.getActualMenu();
    this.cards_in_category  = 0;

    this.cartCount          = 0;

    this.url_facebook       = 'https://www.facebook.com/edicionesespiraleterna';
    this.url_instagram      = 'https://www.instagram.com/edicionesespiraleterna';
    this.url_twitter        = 'https://www.twitter.com/edicionesespiraleterna';


    this.error_global_msg   = "We really sorry! We couldn't connect with our servers.";
    this.error_global_btn   = "Please try again";
    this.error_trigger      = false;
    this.loading            = true;
    this.init();
  }

  init() {
    angular.element("html, body").scrollTop(0,0);
    angular.element('.grid').masonry({
      columnWidth: '.grid-sizer',
      itemSelector: '.grid-item',
      percentPosition: true
    });
    angular.element('.grid').masonry('reloadItems');
    this.updateCartInfo();
    this.setSlides();
    this.setMenu();
    this.setCards();
    this.getRecords();
    // console.log('init del Home controller. Actual_menu:', this.actual_menu);
  }

  setSlides() {
    this.homeSvc.getSlides().then((response)=> {
      if (response.success) {
        this.slides = response.data;
        this.loading = false;
      } else {
        this.error_trigger = true;
      }
    });
  }

  setMenu () {
    this.homeSvc.getMenu().then((response)=> {
      if (response.success) {
        this.menus = response.data;
        this.menus[0].active = true; //activa el primer menu en Collection
        this.cards_in_category = this.menus[0].id; //para filtrar los cards por cada collection
        this.menuTitle = this.menus[0].catalog; //Title del menu
      }
    });
  }
  setCards () {
    this.homeSvc.getCards().then((response)=> {
      if (response.success) {
        this.cards = response.data;
      }
    });
  }

  getTitle () {
    return this.menuTitle;
  }
  getMenu () {
    return this.menus;
  }

  getRecords() {
    this.homeSvc.getRecords().then((response)=> {
      if (response.success) {
        for (var i = 0; i < response.data.length; i++) {
          this.records.push(response.data[i]);
        }
      }
    });
  }

  updateCartInfo() {
    this.cartCount = this.cartSvc.cartData.length;
  }


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
      this.location.path('/home');

      angular.element('body').css('overflow-y','hidden');
      this.homeSvc.slidesUp = false;
      this.slidesUp = this.homeSvc.getSlidesState();
    }

  }

}



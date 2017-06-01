export class NewsController {
  constructor (homeService) {
    'ngInject';

    this.homeService = homeService;
    this.vcards = [];
    this.init();
  }

  init() {
    this.getNewsCards();
  }

  getNewsCards () {
    this.homeService.getNewsCards().then((response)=> {
      if (response.success) {
        this.vcards = response.data;
      }
    });
  }

}

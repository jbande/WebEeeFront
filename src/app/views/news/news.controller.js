export class NewsController {
  constructor (newsService) {
    'ngInject';

    this.newsService = newsService;
    this.vcards = [];
    this.init();
  }

  init() {
    this.getNewsCards();
  }

  getNewsCards () {
    this.newsService.getNewsCards().then((response)=> {
      if (response.success) {
        this.vcards = response.data;
      }
    });
  }

}

/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { HomeController } from './views/home/home.controller.js';
import { CtgController } from './views/catalog/catalog.controller.js';
import { NewsController } from './views/news/news.controller.js';
import { CartController } from './views/cart/cart.controller.js';
import { ContactsController } from './views/contacts/contacts.controller.js';
import { BuyController } from './views/buy/buy.controller.js';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { WebDevTecService } from '../app/components/webDevTec/webDevTec.service';
import { HomeService } from '../app/views/home/home.service';
import { NewsService } from '../app/components/services/news.service';
import { CartService } from '../app/components/services/cart.service';
import { CutText } from '../app/components/filtros/CutText/cuttext.filter';
import { cardsToLoadFilter } from '../app/components/filtros/cardsToLoad.filter';
import { NavbarDirective } from '../app/components/navbar/navbar.directive';
import { CardDirective } from '../app/components/card/card.directive';
import { LCardDirective } from '../app/components/lcard/lcard.directive';
import { VCardDirective } from '../app/components/vcard/vcard.directive';
import { MPlayerDirective } from '../app/components/musicPlayer/musicPlayer.directive';
import { EfooterDirective } from '../app/components/efooter/efooter.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';

angular.module('webEee', ['ngAnimate', 'ngDropdowns', 'angularSoundManager', 'dibari.angular-ellipsis', 'ui.bootstrap.modal', 'angularSimpleSlider', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ui.bootstrap', 'toastr'])
  .constant('malarkey', malarkey)
  .constant('moment', moment)
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .service('githubContributor', GithubContributorService)
  .service('webDevTec', WebDevTecService)
  .service('homeService', HomeService)
  .service('cartService', CartService)
  .service('newsService', NewsService)
  .filter('CutText', CutText)
  .filter('cardsToLoadFilter', cardsToLoadFilter)
  .controller('MainController', MainController)
  .controller('HomeController', HomeController)
  .controller('CtgController', CtgController)
  .controller('NewsController', NewsController)
  .controller('CartController', CartController)
  .controller('ContactsController', ContactsController)
  .controller('BuyController', BuyController)
  .directive('navbar', NavbarDirective)
  .directive('card', CardDirective)
  .directive('lcard', LCardDirective)
  .directive('vcard', VCardDirective)
  .directive('mp', MPlayerDirective)
  .directive('efooter', EfooterDirective)
  .directive('acmeMalarkey', MalarkeyDirective);

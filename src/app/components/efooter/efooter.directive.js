export function EfooterDirective() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: 'app/components/efooter/efooter.html',
    controller: EfooterController,
    controllerAs: 'fvm'
  };

  return directive;

}

class EfooterController {
  constructor ($scope) {
    'ngInject';

    this.btnPrivacy = 'Política de Privacidad';
    this.btnTerms = 'Términos de Uso';
    this.btnLang = [
      {title: 'English', value: 'eng'},
      {title: 'Español', value: 'spa'},
      {title: 'French', value: 'fre'}
    ];

    this.songs = [
      {
        id: 'one',
        title: 'La ciudad de las columnas',
        artist: 'Leo Brouwer',
        cover: 'assets/audios/demo.jpg',
        url: 'assets/audios/demo.mp3'
      },{
        id: 'two',
        title: 'All you need is love',
        artist: 'Leo Brouwer',
        cover: 'assets/audios/All you need is love.jpg',
        url: 'assets/audios/All you need is love.mp3'
      },{
        id: 'three',
        title: 'Hey Jude',
        artist: 'Leo Brouwer',
        cover: 'assets/audios/Hey Jude.jpg',
        url: 'assets/audios/Hey Jude.mp3'
      }
    ];

    this.songBtnLang = [
      {title: 'Play'},
      {title: 'Pause'},
      {title: 'Stop'}
    ];

    // this.init();
  }

  init() {


  }



}

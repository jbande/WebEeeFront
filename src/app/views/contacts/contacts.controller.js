/**
 * Created by LEO'S on 12/04/2017.
 */
export class ContactsController {
  constructor ($scope, $http, homeService) {
    'ngInject';

    this.scope = $scope;
    this.http = $http;
    this.homeSvc = homeService;
    this.labelContacts = 'Send us your consult';
    this.labelSuscribe = 'Our news in your inbox';
    this.placeholder = {
      name: 'Name and lastname',
      mail: 'Mail',
      topic: 'Topic',
      msg: 'Your message here',
      suscribe: 'Your mail'
    };
    this.suscribeWelcome = 'Nuestra Editorial mantiene una actividad, casi diaria, sobre la obra del Maestro Leo Brouwer. Si deseas quedar al tanto de próximos lanzamientos, conciertos o actividades relacionadas con su música, solo suscríbete y nos encargamos del resto.';
    this.suscribeBtn = 'Suscribe';
    this.sendBtn = 'Send';
    this.autoFill = '';
    this.errorMsg = [
      {errorMsg: 'You must fill this field'},
      {errorMsg: 'Please check this. It is not a valid email address'}
    ];
    this.termsInfo = 'I agree with the terms and conditions.';

    this.init();
  }

  init() {
    this.scope.$on('infoRequest', function(evt, data) {
      angular.log('recibido en contacto');
      this.autoFill = data.title + ', ' + data.format;
    });
  }

  submitUserMsg() {
    // comprobación de inputs
    angular.element('.ctc-inputs input').each(function () {
      if (angular.element('.ctc-inputs input').val() === '') {
        angular.element('.input-error').css('display', 'block');
      } else {
        angular.element('.input-error').css('display', 'none');
      }
    });

    this.suscribeBtn = 'Sending...';

    // envío de la info
    this.http.post(this.homeSvc.api_url_ticket, {
      ticket: {
        name: this.name,
        email: this.mail,
        topic: this.topic,
        text: this.msg
      }
    }, {
      withCredentials: true
    }).then ((data) => {
      // console.log('éxito: ', data);
    }, (error) => {
      // console.log('error:', error);
    }).finally(function () {
      // console.log('completooooooo');
    });
  }

}



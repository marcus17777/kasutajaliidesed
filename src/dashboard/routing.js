export default function routing($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/',
      parent: 'root',
      views: {
        'content': {
          template: require('./template.html'),
          controller: require('./controller'),
          controllerAs: 'ctrl'
        }
      }
    })
}

routing.$inject = ['$stateProvider']

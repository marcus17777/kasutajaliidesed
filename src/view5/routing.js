export default function routing($stateProvider) {
  $stateProvider
    .state('view5', {
      url: '/view5/',
      parent: 'root',
      views: {
        '': {
          template: require('./template2.html'),
          controller: 'View5Controller',
          controllerAs: 'ctrl'
        }
      }
    })
}

routing.$inject = ['$stateProvider']

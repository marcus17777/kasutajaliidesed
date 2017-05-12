export default function routing($stateProvider) {
  $stateProvider
    .state('view3', {
      url: '/view3/',
      parent: 'root',
      views: {
        '': {
          template: require('./template.html'),
          controller: 'View3Controller',
          controllerAs: 'ctrl'
        }
      }
    })
}

routing.$inject = ['$stateProvider']

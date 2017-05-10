export default function routing($stateProvider) {
  $stateProvider
    .state('view1', {
      url: '/view1/',
      parent: 'root',
      views: {
        '@': {
          template: require('./template.html'),
          controller: 'View1Controller',
          controllerAs: 'ctrl'
        }
      }
    })
}

routing.$inject = ['$stateProvider']

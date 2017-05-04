export default function routing($stateProvider) {
  $stateProvider
    .state('view2', {
      url: '/view2/',
      views: {
        '@': {
          template: require('./template.html'),
          controller: 'View2Controller',
          controllerAs: 'ctrl'
        }
      }
    })
}

routing.$inject = ['$stateProvider']

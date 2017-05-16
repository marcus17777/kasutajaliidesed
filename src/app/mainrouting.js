export default function mainrouting($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/')

  $stateProvider
    .state('root', {
      abstract: true,
      views: {
        'header': {
          template: require('../abstract_layouts/header.template.html')
        },
        'sidebar': {
          template: require('../abstract_layouts/sidebar.template.html')
        },
        'content': {
          template: '<div ui-view class="fade-in-up"></div>'
        },
        'footer': {
          template: require('../abstract_layouts/footer.template.html')
        }
      }
    })
}

mainrouting.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider']

export default function mainrouting($locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true)

  $urlRouterProvider.otherwise('/view1/')
}

mainrouting.$inject = ['$locationProvider', '$urlRouterProvider']

import Controller from './controller'
import Template from './template.html'

export default function routing($stateProvider) {
  $stateProvider
    .state('dashboard', {
      url: '/',
      parent: 'root',
      views: {
        '': {
          template: Template,
          controller: Controller,
          controllerAs: 'ctrl'
        }
      }
    })
}

routing.$inject = ['$stateProvider']

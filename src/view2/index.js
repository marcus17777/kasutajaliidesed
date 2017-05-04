import uirouter from 'angular-ui-router'

import Controller from './controller'
import Routing from './routing'

export default angular.module('app.view2', [
  uirouter
])
.controller('View2Controller', Controller)
.config(Routing)
.name

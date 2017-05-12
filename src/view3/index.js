import uirouter from 'angular-ui-router'

import Controller from './controller'
import Routing from './routing'

export default angular.module('app.view3', [
  uirouter
])
.controller('View3Controller', Controller)
.config(Routing)
.name

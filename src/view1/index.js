import uirouter from 'angular-ui-router'

import Controller from './controller'
import Routing from './routing'

export default angular.module('app.view1', [
  uirouter
])
.controller('View1Controller', Controller)
.config(Routing)
.name

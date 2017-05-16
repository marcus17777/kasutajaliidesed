import uirouter from 'angular-ui-router'

import Controller from './controller'
import Routing from './routing'

export default angular.module('app.view5', [
  uirouter
])
.controller('View5Controller', Controller)
.config(Routing)
.name

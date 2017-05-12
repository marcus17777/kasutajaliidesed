import "bootstrap/dist/css/bootstrap-theme.min.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import "simple-line-icons/css/simple-line-icons.css"

import './index.scss'
import './css/layout/layout.scss'
import './css/layout/themes/darkblue.scss'
import './css/global/components.scss'
import './css/global/plugins.scss'

import angular from 'angular'
import uirouter from 'angular-ui-router'

import MainController from './app/maincontroller'
import MainRouting from './app/mainrouting'
import Run from './app/run'
import Components from './components'

import view1 from './view1'
import view2 from './view2'
import view3 from './view3'
import dashboardView from './dashboard'

angular.module('app', [
  Components,
  view1,
  view2,
  view3,
  dashboardView,
])
.controller('MainController', MainController)
.config(MainRouting)
.run(Run)

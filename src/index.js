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
import angularanimate from 'angular-animate'
import uirouter from 'angular-ui-router'
import accordion from 'angular-ui-bootstrap/src/accordion';

import MainController from './app/maincontroller'
import MainRouting from './app/mainrouting'
import Run from './app/run'
import Components from './components'

import view1 from './view1'
import view2 from './view2'
import view3 from './view3'
import view5 from './view5'

import dashboardView from './dashboard'

angular.module('app', [
  angularanimate,
  uirouter,

  //ui-bootstrap
  accordion,

  Components,
  view1,
  view2,
  view3,
  view5,
  dashboardView,
])
.controller('MainController', MainController)
.config(MainRouting)
.run(Run)

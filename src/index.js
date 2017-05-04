import './index.scss'

import angular from 'angular'

import MainController from './app/maincontroller'
import MainRouting from './app/mainrouting'

import view1 from './view1'
import view2 from './view2'

angular.module('app', [
  view1,
  view2
])
.controller('MainController', MainController)
.config(MainRouting)

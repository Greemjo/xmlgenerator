import * as angular from 'angular'
import '@uirouter/angularjs'
import 'angular-ui-bootstrap'
import { XmlService } from './services/xml.service'
import { stateConfig } from './states'
import { appComponent } from './components/app/app.component'
import { navbarComponent } from './components/nav-bar/nav-bar.component'
import { homeComponent } from './components/home/home.component'
import { toXmlComponent } from './components/to-xml/to-xml.component'

angular

  .module('app', ['ui.bootstrap', 'ui.router'])
  .service('xmlService', XmlService)
  .config(stateConfig)

  .component('app', appComponent)
  .component('appNavBar', navbarComponent)
  .component('appHome', homeComponent)
  .component('appToXml', toXmlComponent)

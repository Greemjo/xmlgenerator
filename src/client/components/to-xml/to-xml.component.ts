import { IComponentOptions } from 'angular'
import * as builder from 'xmlbuilder'

class ToXmlComponent {
  private object: object
  private doc
   /*@ngInject*/
  constructor(
    private xmlService,
  ) { }

  private generateXml(obj) {
          this.xmlService.posting(obj);
    
        }
  private download(){
    location.href = "xmlfiles/xmldoc.xml"
  }      
}

export const toXmlComponent: IComponentOptions = {
  controller: ToXmlComponent,
  template: require('./to-xml.component.html'),
}

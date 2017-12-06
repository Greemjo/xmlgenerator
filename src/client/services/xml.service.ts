import { IHttpService } from 'angular';

export class XmlService {
    /* private xmlDoc: any
     */
    /*@ngInject*/
    constructor(private $http : IHttpService,){}
    
    public posting(obj){
        console.log( "___SERVICE__",obj)
      return this.$http.post('api/users', obj).then(() => {
          console.log("success")
      }).catch(err => console.info(err))
    }

        
    }

import { LoginServiceService } from '../app/login-service.service';

export class Login {
    constructor(
        public username :string,
        public password : string,
        public latitude : string,
        public longitude : string,
        public remarks : string
    ){
        
    }

}

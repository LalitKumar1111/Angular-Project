import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Log2Service {

  constructor() { }
  checkusernameandpassword(uname:string,pwd:string)
  {
    if(uname == 'lalit@gmail.com' && pwd == "Abcd1234@"){
      localStorage.setItem('username','admin');
      return true;
    }
    else{
      return false;
    }
  }
}

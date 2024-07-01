import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {
  constructor () { 

  }
  log (Pagename :string){
    console.log('i am logged in '+ Pagename + ' page') ; 
  }

}
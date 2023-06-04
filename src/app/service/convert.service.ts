import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor() { }
  
  convert(number: string){
    // set the base/start unicode
    const base = 'A'.charCodeAt(0) - 1;
    // convert string number and rounded the number
    const letterNumber = (Number(number))%26 +1;
    // console.log(letterNumber, base)
    
    if(letterNumber >= 0){
      // convert the unicode to text in the sequence of UTF-16
      const letter = String.fromCharCode(base + letterNumber);
      return letter
    }else{
      return 
    }
    
  }
}

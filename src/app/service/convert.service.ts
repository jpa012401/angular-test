import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertService {

  constructor() { }
  
  convert(number: string){
    // set the base/start unicode
    const base = 'A'.charCodeAt(0) - 1;
    
    // console.log(letterNumber, base)
    let converted = '';
    var array: any[] = number.split('#');
    // pass each char in convert
    array.forEach(element => {
      if(element !== ''){
        // convert string number and rounded the number
        const letterNumber = (Number(element))%26 +1;
        // convert the unicode to text in the sequence of UTF-16
        const letter = String.fromCharCode(base + letterNumber);
        converted += letter;
        
      }else{
        // return '?'
      }
    });
    
    return converted
    
  }
}

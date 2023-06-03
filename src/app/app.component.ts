import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showField: FormControl = new FormControl('');
  resultField = new FormControl();
  constructor(){

  }
  
  clickNum(button: string){
    // console.log(button)
    this.showField.setValue(this.showField.value + button);
    this.showResult();
  }
  delLast(text: string|null){
    // del last char
    this.showField.setValue(text?.slice(0, -1))
    // if deleted all the char reset the result field else call show
    if(this.showField.value === ''){
      this.resultField.setValue('');
      return null
    }else{
      this.showResult();
      return true      
    }    
  }

  showResult(){
    // reset result field
    this.resultField.setValue('');
    // convert string to array
    var array: any[] = this.showField.value?.split('#');
    // pass each char in convert
    array.forEach(element => {
      if(element === ''){
        
      }else{
        this.resultField.setValue(this.resultField.value + this.convert(element));
      }
      
    });
        
  }
  
  convert(number: string){
    // set the base/start unicode
    const base = 'A'.charCodeAt(0) - 1;
    // convert string number and rounded the number
    const letterNumber = (Number(number))%26 +1;
    console.log(letterNumber, base)
    
    if(letterNumber >= 0){
      // convert the unicode to text in the sequence of UTF-16
      const letter = String.fromCharCode(base + letterNumber);
      return letter
    }else{
      return 
    }
    
  }

}

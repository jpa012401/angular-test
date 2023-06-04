import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ConvertService } from 'src/app/service/convert.service';

@Component({
  selector: 'app-number-to-text',
  templateUrl: './number-to-text.component.html',
  styleUrls: ['./number-to-text.component.css']
})
export class NumberToTextComponent {
  showField: FormControl = new FormControl('');
  resultField = new FormControl();
  constructor(
    private convertService: ConvertService,
  ){}
  
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
        this.resultField.setValue(this.resultField.value + this.convertService.convert(element));
      }
      
    });
        
  }
  
  
}

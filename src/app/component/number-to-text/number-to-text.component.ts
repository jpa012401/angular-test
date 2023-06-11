import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { ConverterInterface } from 'src/app/ngrxState/number-to-text.model';
import { ConvertService } from 'src/app/service/convert.service';
import * as convertAction from 'src/app/ngrxState/number-to-text.actions'
import { selectConvertedValue, selectTypedValue } from 'src/app/ngrxState/number-to-text.selectors';

@Component({
  selector: 'app-number-to-text',
  templateUrl: './number-to-text.component.html',
  styleUrls: ['./number-to-text.component.css']
})
export class NumberToTextComponent {
  // showField: FormControl = new FormControl('');
  // resultField = new FormControl();
  inputValue$ = this.store.select(selectTypedValue); 
  resultValue$ = this.store.select(selectConvertedValue); 
  constructor(
    private convertService: ConvertService,
    private store: Store<{converter: ConverterInterface}>
  ){}
  
  clickNum(button: string){
    // console.log(button)
    // this.showField.setValue(this.showField.value + button);
    // this.showResult();
    this.store.dispatch(convertAction.inputNumber({ number: button }));
    this.store.dispatch(
      convertAction.updateConvertedValue({ converterService: this.convertService })
    );
  }

  delLast(){
    // del last char
    // this.showField.setValue(text?.slice(0, -1))
    // // if deleted all the char reset the result field else call show
    // if(this.showField.value === ''){
    //   this.resultField.setValue('');
    //   return null
    // }else{
    //   this.showResult();
    //   return true      
    // }  
    this.store.dispatch(convertAction.removeLastValue());
    this.store.dispatch(
      convertAction.updateConvertedValue({ converterService: this.convertService })
    );  
  }

  // showResult(){
  //   // reset result field
  //   this.resultField.setValue('');
  //   // convert string to array
  //   var array: any[] = this.showField.value?.split('#');
  //   // pass each char in convert
  //   array.forEach(element => {
  //     if(element === ''){
        
  //     }else{
  //       this.resultField.setValue(this.resultField.value + this.convertService.convert(element));
  //     }
      
  //   });
        
  // }
  
  
}

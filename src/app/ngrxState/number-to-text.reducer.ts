import { createReducer, on } from "@ngrx/store";
import * as convertAction from "./number-to-text.actions";
import { ConverterInterface } from "./number-to-text.model";

export const initialState:ConverterInterface ={
    inputValue: '',
    resultValue: '',

};

export const collectionReducer = createReducer(
    initialState,
    on(convertAction.inputNumber, (state, {number}) => ({
        ...state,
        inputValue: state.inputValue + number
    })),
    on(convertAction.removeLastValue, (state) => ({ 
        ...state,
        inputValue: state.inputValue.slice(0, -1) 
    })),
    on(convertAction.updateConvertedValue, (state, { converterService }) => {
        if(state.inputValue === ''){
            return { ...state, resultValue:'' }  
        }else{
            
            const convertedValue = converterService.convert(state.inputValue);        
            return { ...state, resultValue:convertedValue };
        };
        
    })
);


import { createSelector } from '@ngrx/store';
import { ConverterInterface } from './number-to-text.model';

const selectConverterState = (state: { converter: ConverterInterface }) => state.converter;

// Selector to get the typedValue from the converter state
export const selectTypedValue = createSelector(
    selectConverterState,
    (state: ConverterInterface) => state.inputValue
);

// Selector to get the convertedValue from the converter state
export const selectConvertedValue = createSelector(
    selectConverterState,
    (state: ConverterInterface) => state.resultValue
);







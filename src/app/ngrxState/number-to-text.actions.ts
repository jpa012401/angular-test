import { createAction, props } from "@ngrx/store";
import { ConvertService } from "src/app/service/convert.service";

export const inputNumber = createAction('[Converter] Input Number', props<{ number: string}>());
export const removeLastValue = createAction('[Converter] Remove Last Value');
export const updateConvertedValue = createAction('[Converter] Update Converted Value', props<{ converterService: ConvertService }>());
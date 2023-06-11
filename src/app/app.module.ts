import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NumberToTextComponent } from './component/number-to-text/number-to-text.component';
import { StoreModule } from '@ngrx/store';
import { collectionReducer } from './ngrxState/number-to-text.reducer';

@NgModule({
  declarations: [
    AppComponent,
    NumberToTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({converter: collectionReducer}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

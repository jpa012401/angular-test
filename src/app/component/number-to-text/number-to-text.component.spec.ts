import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToTextComponent } from './number-to-text.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { collectionReducer } from 'src/app/ngrxState/number-to-text.reducer';


describe('NumberToTextComponent', () => {
  let component: NumberToTextComponent;
  let fixture: ComponentFixture<NumberToTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberToTextComponent ],
      imports:[
        ReactiveFormsModule,
        StoreModule.forRoot({converter: collectionReducer}),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(NumberToTextComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});

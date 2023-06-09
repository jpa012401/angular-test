import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { NumberToTextComponent } from './component/number-to-text/number-to-text.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        NumberToTextComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  })

  it('should render number-to-text component', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement;
    const otherComponent = debugElement.query(By.directive(NumberToTextComponent));
    expect(otherComponent).toBeTruthy(); // Check if the other component is rendered
  });

  // it(`should have as title 'angular-test'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('angular-test');
  // });

  
});

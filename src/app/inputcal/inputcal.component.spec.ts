import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputcalComponent } from './inputcal.component';

describe('InputcalComponent', () => {
  let component: InputcalComponent;
  let fixture: ComponentFixture<InputcalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputcalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputcalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

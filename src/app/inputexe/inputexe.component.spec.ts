import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputexeComponent } from './inputexe.component';

describe('InputexeComponent', () => {
  let component: InputexeComponent;
  let fixture: ComponentFixture<InputexeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputexeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

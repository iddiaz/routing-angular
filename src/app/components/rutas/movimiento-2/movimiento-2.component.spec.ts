import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Movimiento2Component } from './movimiento-2.component';

describe('Movimiento2Component', () => {
  let component: Movimiento2Component;
  let fixture: ComponentFixture<Movimiento2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Movimiento2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Movimiento2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

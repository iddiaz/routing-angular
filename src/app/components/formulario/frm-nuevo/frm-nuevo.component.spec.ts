import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmNuevoComponent } from './frm-nuevo.component';

describe('FrmNuevoComponent', () => {
  let component: FrmNuevoComponent;
  let fixture: ComponentFixture<FrmNuevoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrmNuevoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrmNuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

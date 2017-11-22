import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelTimeEditarComponent } from './painel-time-editar.component';

describe('PainelTimeEditarComponent', () => {
  let component: PainelTimeEditarComponent;
  let fixture: ComponentFixture<PainelTimeEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelTimeEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelTimeEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

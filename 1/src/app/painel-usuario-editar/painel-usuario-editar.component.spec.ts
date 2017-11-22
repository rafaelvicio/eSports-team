import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelUsuarioEditarComponent } from './painel-usuario-editar.component';

describe('PainelUsuarioEditarComponent', () => {
  let component: PainelUsuarioEditarComponent;
  let fixture: ComponentFixture<PainelUsuarioEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelUsuarioEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelUsuarioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

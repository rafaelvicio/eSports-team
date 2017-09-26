import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelTimesComponent } from './painel-times.component';

describe('PainelTimesComponent', () => {
  let component: PainelTimesComponent;
  let fixture: ComponentFixture<PainelTimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelTimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

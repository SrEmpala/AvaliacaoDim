import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FornecedoresConsultaComponent } from './fornecedores-consulta.component';

describe('FornecedoresConsultaComponent', () => {
  let component: FornecedoresConsultaComponent;
  let fixture: ComponentFixture<FornecedoresConsultaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FornecedoresConsultaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FornecedoresConsultaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

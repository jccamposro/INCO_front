import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEntrepreneurComponent } from './perfil-entrepreneur.component';

describe('PerfilEntrepreneurComponent', () => {
  let component: PerfilEntrepreneurComponent;
  let fixture: ComponentFixture<PerfilEntrepreneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilEntrepreneurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

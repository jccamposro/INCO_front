import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurCreateComponent } from './entrepreneur-create.component';

describe('EntrepreneurCreateComponent', () => {
  let component: EntrepreneurCreateComponent;
  let fixture: ComponentFixture<EntrepreneurCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepreneurCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneurCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

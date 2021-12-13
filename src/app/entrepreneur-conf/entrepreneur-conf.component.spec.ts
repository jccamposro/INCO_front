import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurConfComponent } from './entrepreneur-conf.component';

describe('EntrepreneurConfComponent', () => {
  let component: EntrepreneurConfComponent;
  let fixture: ComponentFixture<EntrepreneurConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepreneurConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneurConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurColabComponent } from './entrepreneur-colab.component';

describe('EntrepreneurColabComponent', () => {
  let component: EntrepreneurColabComponent;
  let fixture: ComponentFixture<EntrepreneurColabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepreneurColabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneurColabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

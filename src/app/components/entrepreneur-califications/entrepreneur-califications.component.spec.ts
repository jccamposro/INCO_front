import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurCalificationsComponent } from './entrepreneur-califications.component';

describe('EntrepreneurCalificationsComponent', () => {
  let component: EntrepreneurCalificationsComponent;
  let fixture: ComponentFixture<EntrepreneurCalificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepreneurCalificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepreneurCalificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

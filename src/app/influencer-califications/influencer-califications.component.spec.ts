import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerCalificationsComponent } from './influencer-califications.component';

describe('InfluencerCalificationsComponent', () => {
  let component: InfluencerCalificationsComponent;
  let fixture: ComponentFixture<InfluencerCalificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerCalificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerCalificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

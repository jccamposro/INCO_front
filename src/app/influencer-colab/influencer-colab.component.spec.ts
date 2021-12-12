import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerColabComponent } from './influencer-colab.component';

describe('InfluencerColabComponent', () => {
  let component: InfluencerColabComponent;
  let fixture: ComponentFixture<InfluencerColabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerColabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerColabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

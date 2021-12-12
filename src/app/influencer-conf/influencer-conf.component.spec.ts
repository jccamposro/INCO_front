import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerConfComponent } from './influencer-conf.component';

describe('InfluencerConfComponent', () => {
  let component: InfluencerConfComponent;
  let fixture: ComponentFixture<InfluencerConfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfluencerConfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfluencerConfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

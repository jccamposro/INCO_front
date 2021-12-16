import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerScoreComponent } from './influencer-score.component';

describe('InfluencerScoreComponent', () => {
    let component: InfluencerScoreComponent;
    let fixture: ComponentFixture<InfluencerScoreComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ InfluencerScoreComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InfluencerScoreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

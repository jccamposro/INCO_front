import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerSettingsComponent } from './influencer-settings.component';

describe('InfluencerSettingsComponent', () => {
    let component: InfluencerSettingsComponent;
    let fixture: ComponentFixture<InfluencerSettingsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ InfluencerSettingsComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InfluencerSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

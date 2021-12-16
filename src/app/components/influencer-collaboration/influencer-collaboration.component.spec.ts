import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfluencerCollaborationComponent } from './influencer-collaboration.component';

describe('InfluencerCollaborationComponent', () => {
    let component: InfluencerCollaborationComponent;
    let fixture: ComponentFixture<InfluencerCollaborationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ InfluencerCollaborationComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(InfluencerCollaborationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurScoreComponent } from './entrepreneur-score.component';

describe('EntrepreneurScoreComponent', () => {
    let component: EntrepreneurScoreComponent;
    let fixture: ComponentFixture<EntrepreneurScoreComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ EntrepreneurScoreComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EntrepreneurScoreComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

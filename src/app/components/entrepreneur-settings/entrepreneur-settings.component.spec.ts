import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurSettingsComponent } from './entrepreneur-settings.component';

describe('EntrepreneurSettingsComponent', () => {
    let component: EntrepreneurSettingsComponent;
    let fixture: ComponentFixture<EntrepreneurSettingsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ EntrepreneurSettingsComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EntrepreneurSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

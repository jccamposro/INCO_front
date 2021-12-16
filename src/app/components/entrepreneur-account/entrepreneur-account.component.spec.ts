import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepreneurAccountComponent } from './entrepreneur-account.component';

describe('EntrepreneurAccountComponent', () => {
    let component: EntrepreneurAccountComponent;
    let fixture: ComponentFixture<EntrepreneurAccountComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ EntrepreneurAccountComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EntrepreneurAccountComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

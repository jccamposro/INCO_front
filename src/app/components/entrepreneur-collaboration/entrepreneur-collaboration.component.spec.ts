import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrepreneurCollaborationComponent } from './entrepreneur-collaboration.component';

describe('EntrepreneurCollaborationComponent', () => {
    let component: EntrepreneurCollaborationComponent;
    let fixture: ComponentFixture<EntrepreneurCollaborationComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ EntrepreneurCollaborationComponent ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EntrepreneurCollaborationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

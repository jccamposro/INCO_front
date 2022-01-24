import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Coincidence } from '../../entities/coincidence';
import { LoadingService } from '../../services/loading.service';
import { MatchResponse } from '../../entities/reponse.interface';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-contacts',
    templateUrl: './contacts.component.html',
    styleUrls: [ './contacts.component.css' ]
})
export class ContactsComponent implements OnInit {

    public contactRealised: Coincidence[] = [];
    public contactRequest: Coincidence[] = [];
    public contactWaiting: Coincidence[] = [];

    public contactRealisedFinished: boolean = false;
    public contactRequestFinished: boolean = false;
    public contactWaitingFinished: boolean = false;

    constructor(private service: ContactService, private loadingService: LoadingService, private toastr: ToastrService) {
    }

    ngOnInit(): void {
        this.fetchContacts();
    }

    public confirmMatch(contact: Coincidence): void {
        this.loadingService.enable();

        this.service.answerMatch({
            id: contact.id,
            name_user : contact.name_user,
            response: 1,
        })
            .subscribe((response: MatchResponse) => {
                this.loadingService.disable();
                this.toastr.success(response.name_user, 'Match success!');
                this.fetchContacts();
            }, error => {
                this.loadingService.disable();
                this.toastr.error(error.error.response, 'Match error!');
            });
    }

    public rejectMatch(contact: Coincidence): void {
        this.loadingService.enable();

        this.service.answerMatch({
            id: contact.id,
            name_user : contact.name_user,
            response: 0,
        })
            .subscribe((response: MatchResponse) => {
                this.loadingService.disable();
                this.toastr.success(response.name_user, 'Reject match success!');
                this.fetchContacts();
            }, error => {
                this.loadingService.disable();
                this.toastr.error(error.error.response, 'Reject match error!');
            });
    }

    private fetchContacts(): void {
        this.loadingService.enable();

        this.service.getContactRealised().subscribe(data => {
            this.contactRealised = data;
            this.contactRealisedFinished = true;
            this.disableIfFinish();
        });

        this.service.getContactRequest().subscribe(data => {
            this.contactRequest = data;
            this.contactRequestFinished = true;
            this.disableIfFinish();
        });

        this.service.getContactWaiting().subscribe(data => {
            this.contactWaiting = data;
            this.contactWaitingFinished = true;
            this.disableIfFinish();
        });
    }

    private disableIfFinish(): void {
        if (this.contactRealisedFinished && this.contactRealisedFinished && this.contactWaitingFinished) {
            this.loadingService.disable();
        }
    }

}

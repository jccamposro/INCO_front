import { Component, OnInit } from '@angular/core';
import { VentureService } from 'src/app/services/venture.service';
import { InfluencerService } from 'src/app/services/influencer.service';
import { UserService } from 'src/app/services/user.service';
import { MatchResponse } from '../../entities/reponse.interface';
import { LoadingService } from '../../services/loading.service';
import { ContactService } from '../../services/contact.service';
import { ToastrService } from 'ngx-toastr';
import { UserForMatch, UserForMatchIN } from '../../entities/user.interface';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: [ './main-page.component.css' ]
})
export class MainPageComponent implements OnInit {

    constructor(public influencerService: InfluencerService,
                public ventureService: VentureService,
                public userService: UserService,
                private loadingService: LoadingService,
                private service: ContactService,
                private toastr: ToastrService) {
    }

    myData: any;
    influencers: any = [];
    myObjStr: any;

    myData2: any;
    ventures: any = [];
    myObjStr2: any;
    isEntrepreneur = false;
    isInfluencer = false;

    ngOnInit() {
        this.userService.get().subscribe((resp: any) => {
            if (resp.user.role == 1) {
                this.isEntrepreneur = true;

            } else if (resp.user.role == 2) {
                this.isInfluencer = true;
            }
        });
        this.influencerService.getInfluencers().subscribe(data => {
            console.warn(data);
            this.myData = data;
            this.myObjStr = JSON.stringify(data);
            this.influencers = JSON.parse(this.myObjStr);
            console.log(this.influencers);
        });
        this.ventureService.getCollaborations().subscribe(data => {
            console.warn(data);
            this.myData2 = data;
            this.myObjStr2 = JSON.stringify(data);
            this.ventures = JSON.parse(this.myObjStr2);
            console.log(this.ventures);
        })
    }

    public createMatch(userForMatch: UserForMatch): void {
        this.loadingService.enable();

        this.service.createMatch({
            id_user: userForMatch.id_user,
        })
            .subscribe((response: MatchResponse) => {
                this.loadingService.disable();
                this.toastr.success(response.name_user, 'Reject match success!');
            }, error => {
                this.loadingService.disable();
                this.toastr.error(error.error.response, 'Reject match error!');
            });
    }

    public createMatchIn(userForMatchI: UserForMatchIN): void {
        this.loadingService.enable();

        this.service.createMatch({
            id_entrepreneur: userForMatchI.id_entrepreneur,
        })
            .subscribe((response: MatchResponse) => {
                this.loadingService.disable();
                this.toastr.success(response.name_user, 'Reject match success!');
            }, error => {
                this.loadingService.disable();
                this.toastr.error(error.error.response, 'Reject match error!');
            });
    }
}

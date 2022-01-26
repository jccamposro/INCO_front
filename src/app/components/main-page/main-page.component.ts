import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { InfluencerService } from 'src/app/services/influencer.service';
import { UserService } from 'src/app/services/user.service';
import { Coincidence } from '../../entities/coincidence';
import { MatchResponse } from '../../entities/reponse.interface';
import { LoadingService } from '../../services/loading.service';
import { ContactService } from '../../services/contact.service';
import { ToastrService } from 'ngx-toastr';
import { UserForMatch } from '../../entities/user.interface';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: [ './main-page.component.css' ]
})
export class MainPageComponent implements OnInit {

    constructor(public influencerService: InfluencerService,
                public companyService: CompanyService,
                public userService: UserService,
                private loadingService: LoadingService,
                private service: ContactService,
                private toastr: ToastrService) {
    }

    myData: any;
    misObjetos: any = [];
    myObjStr: any;

    myData2: any;
    misObjetos2: any = [];
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
        this.influencerService.list().subscribe(data => {
            console.warn(data);
            this.myData = data;
            this.myObjStr = JSON.stringify(data);
            this.misObjetos = JSON.parse(this.myObjStr);
            console.log(this.misObjetos);
        });
        this.companyService.list().subscribe(data => {
            console.warn(data);
            this.myData2 = data;
            this.myObjStr2 = JSON.stringify(data);
            this.misObjetos2 = JSON.parse(this.myObjStr2);
            console.log(this.misObjetos2);
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

}

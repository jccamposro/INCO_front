import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user.interface';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { LoadingService } from '../../services/loading.service';
import { ScriptsLoadService } from 'src/app/scripts-load.service';
import { CompanyService } from '../../services/company.service';
import { InfluencerService } from '../../services/influencer.service';
import { GlobalService } from '../../services/global.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: [ './layout.component.css' ]
})
export class LayoutComponent implements OnInit {

    public user: User;

    myData:any;
    misObjetos: any=[];
    myObjStr:any;
    twitter: any;
    facebook: any;
    instagram: any;
    youtube:any;
    kawai: any;
    pinterest: any;
    reddit: any;
    snapchat: any;
    tik_tok: any;
    twitch: any;
    

    
    constructor(
        private router: Router,
        private userService: UserService,
        private authService: AuthService,
        private globalService: GlobalService,
        private companyService: CompanyService,
        private loadingService: LoadingService,
        private influencerService: InfluencerService,
        private _scriptsLoad: ScriptsLoadService) {

        _scriptsLoad.load([ 'userView' ])

    }

    get isEntrepreneur(): boolean {
        return this.user?.role === 1;
    }

    ngOnInit(): void {
        this.loadingService.enable();
        this.userService.get().subscribe((data: { user: User }) => {
                this.user = data?.user;
                if (this.isEntrepreneur) {
                    this.companyService.get()
                        .subscribe(
                            data => {
                                this.loadingService.disable();
                                this.router.navigateByUrl('/entrepreneur-profile')
                            },
                            error => {
                                this.loadingService.disable();
                                this.router.navigateByUrl('/register-company')
                            })
                } else {
                    this.influencerService.get()
                        .subscribe(
                            data => {
                                this.loadingService.disable();
                                this.router.navigateByUrl('/influencer-profile');
                            },
                            error => {
                                this.loadingService.disable();
                                this.router.navigateByUrl('/register-influencer')
                            })
                }
            },
            error => {
                this.loadingService.disable();
            }
        );

        this.influencerService.getSocialNetworks().subscribe(data => {
            console.warn(data);
            this.myData = data;
            this.myObjStr = JSON.stringify(data);
            this.misObjetos = JSON.parse(this.myObjStr);
            this.facebook = this.misObjetos.social_networks.facebook
            this.instagram= this.misObjetos.social_networks.instagram;
            this.kawai= this.misObjetos.social_networks.kawai;
            this.pinterest= this.misObjetos.social_networks.pinterest;
            this.reddit= this.misObjetos.social_networks.reddit;
            this.snapchat= this.misObjetos.social_networks.snapchat;
            this.tik_tok= this.misObjetos.social_networks.tik_tok;
            this.twitch= this.misObjetos.social_networks.twitch;
            this.twitter=this.misObjetos.social_networks.twitter;
            this.youtube=this.misObjetos.social_networks.youtube;
            console.log(this.misObjetos.social_networks.facebook);
        });

    }

    public logout(): void {
        this.globalService.logout();
    }

}

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
    }

    public logout(): void {
        this.globalService.logout();
    }

}

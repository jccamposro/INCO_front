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
import { PhotosService } from '../../services/photos.service';
import { CacheService } from '../../services/cache.service';
import { SocialNetworks } from '../../entities/social-networks.interface';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: [ './layout.component.css' ]
})
export class LayoutComponent implements OnInit {

    public user: User;
    public socialNetworks: SocialNetworks;
    public defaultProfileImage: string = 'https://www.eldiario.com.co/wp-content/uploads/2019/01/nn.jpg';
    public profileImage: string = 'https://www.eldiario.com.co/wp-content/uploads/2019/01/nn.jpg';

    constructor(
        private router: Router,
        private userService: UserService,
        private authService: AuthService,
        private cacheService: CacheService,
        private photosService: PhotosService,
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

    async ngOnInit(): Promise<void> {
        this.loadingService.enable();
        this.userService.get().subscribe((userData: { user: User }) => {
                this.cacheService.setUser(userData.user);
                this.user = userData.user;

                if (this.isEntrepreneur) {
                    this.companyService.get()
                        .subscribe(
                            data => {
                                this.loadingService.disable();
                                this.cacheService.setCompany(data.company);
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
                                this.cacheService.setInfluencer(data.influencer);
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
            });

        this.photosService.getPhotoProfile().subscribe(data => this.profileImage = data.image);

        this.influencerService.getSocialNetworks().subscribe(data => {
            this.cacheService.setSocialNetworks(data.social_networks);
            this.socialNetworks = data.social_networks
        });

    }

    public logout(): void {
        this.globalService.logout();
    }

}

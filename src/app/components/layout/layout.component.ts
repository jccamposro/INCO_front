import { Component, OnInit } from '@angular/core';
import { User } from '../../entities/user.interface';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { LoadingService } from '../../services/loading.service';
import { ScriptsLoadService } from 'src/app/scripts-load.service';

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
        private loadingService: LoadingService,
        private _scriptsLoad: ScriptsLoadService) {

            _scriptsLoad.load(["userView"])

    }

    get isEntrepreneur(): boolean {
        return this.user?.role === 1;
    }

    ngOnInit(): void {
        this.loadingService.enable();
        this.userService.get().subscribe((data: { user: User }) => {
                this.loadingService.disable();
                this.user = data?.user;
                if (this.isEntrepreneur) {
                    this.router.navigateByUrl('/entrepreneur-profile');
                } else {
                    this.router.navigateByUrl('/influencer-profile');
                }
            },
            error => {
                this.loadingService.disable();
            }
        );
    }

    public logout(): void {
        this.loadingService.enable();
        this.authService.logout().subscribe(
            success => {
                this.loadingService.disable();
                localStorage.removeItem('token');
                this.router.navigateByUrl('/login');
            }, error => {
                this.loadingService.disable();
            }
        )
    }

}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { LoadingService } from './loading.service';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    constructor(
        private router: Router,
        private authService: AuthService,
        private loadingService: LoadingService) {
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

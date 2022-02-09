import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CacheService } from '../services/cache.service';

@Injectable({
    providedIn: 'root'
})
export class DataGuard implements CanActivate {

    constructor(private router: Router, private cacheService: CacheService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.cacheService.user$.currentValue() === undefined) {
            this.router.navigateByUrl('/');
        }
        return this.cacheService.user$.currentValue() !== undefined
    }
}

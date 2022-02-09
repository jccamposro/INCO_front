import { Injectable } from '@angular/core';
import { User } from '../entities/user.interface';
import { Company } from '../entities/company.interface';
import { Influencer } from '../entities/influencer.interface';
import { SocialNetworks } from '../entities/social-networks.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CacheService {

    private _user: BehaviorSubject<User> = new BehaviorSubject(null);
    private _company: BehaviorSubject<Company> = new BehaviorSubject(null);
    private _influencer: BehaviorSubject<Influencer> = new BehaviorSubject(null);
    private _socialNetworks: BehaviorSubject<SocialNetworks> = new BehaviorSubject(null);

    constructor() {
    }

    get user$(): Observable<User> {
        return this._user;
    }

    get company$(): Observable<Company> {
        return this._company;
    }

    get influencer$(): Observable<Influencer> {
        return this._influencer;
    }

    get socialNetworks$(): Observable<SocialNetworks> {
        return this._socialNetworks;
    }

    public setUser(user: User) {
        this._user.next(user)
    }

    public setCompany(company: Company) {
        this._company.next(company)
    }

    public setInfluencer(influencer: Influencer) {
        this._influencer.next(influencer)
    }

    public setSocialNetworks(socialNetworks: SocialNetworks) {
        this._socialNetworks.next(socialNetworks)

    }
}

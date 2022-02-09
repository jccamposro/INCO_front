import { Component, OnInit } from '@angular/core';
import { SocialNetworks } from '../../entities/social-networks.interface';
import { CacheService } from '../../services/cache.service';
import { Observable } from 'rxjs';
import { User } from '../../entities/user.interface';
import { PhotosService } from '../../services/photos.service';

@Component({
    selector: 'app-influencer-profile',
    templateUrl: './influencer-profile.component.html',
    styleUrls: [ './influencer-profile.component.css' ]
})
export class InfluencerProfileComponent implements OnInit {
    public name_user: string;
    public backgroundImage: string = "https://www.wallpapertip.com/wmimgs/98-980295_elon-musk-photo-hd.jpg";

    constructor(public cacheService: CacheService, private photoService: PhotosService) {
    }

    ngOnInit() {
        this.photoService.getPhotoInfluencer().subscribe(data => this.backgroundImage = data.image);
    }

    get socialNetworks$(): Observable<SocialNetworks> {
        return this.cacheService.socialNetworks$
    }

    get user$(): Observable<User> {
        return this.cacheService.user$
    }

}

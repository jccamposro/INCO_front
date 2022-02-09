import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/entities/company.interface';
import { CacheService } from '../../services/cache.service';
import { Observable } from 'rxjs';
import { User } from '../../entities/user.interface';
import { PhotosService } from '../../services/photos.service';

@Component({
    selector: 'app-entrepreneur-profile',
    templateUrl: './entrepreneur-profile.component.html',
    styleUrls: [ './entrepreneur-profile.component.css' ]
})
export class EntrepreneurProfileComponent implements OnInit {
    public name_user: string;
    public company: Company;
    public backgroundImage: string = "https://www.wallpapertip.com/wmimgs/98-980295_elon-musk-photo-hd.jpg";

    constructor(public cacheService: CacheService, private photoService: PhotosService) {
    }

    ngOnInit() {
        this.photoService.getPhotoEntrepreneur().subscribe(data => this.backgroundImage = data.image);
    }

    get user$(): Observable<User> {
        return this.cacheService.user$
    }

    get company$(): Observable<Company> {
        return this.cacheService.company$
    }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../entities/user.interface';
import { GenericResponse } from '../../entities/reponse.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from '../../services/loading.service';
import { InfluencerService } from '../../services/influencer.service';
import { PhotosService } from '../../services/photos.service';
import { CacheService } from '../../services/cache.service';

@Component({
    selector: 'app-influencer-settings',
    templateUrl: './influencer-settings.component.html',
    styleUrls: [ './influencer-settings.component.css' ]
})
export class InfluencerSettingsComponent implements OnInit {

    public userForm: FormGroup;
    public typePassword: string = 'password';
    public categories = [
        {value: '1', label: 'Fashion bloggers'},
        {value: '2', label: 'Foodies'},
        {value: '3', label: 'Gamers and technology gurus'},
        {value: '4', label: 'Celebrities and artists'},
        {value: '5', label: 'Fitness and healthy life'}
    ];

    private user: User;
    private profileImage: any;
    private bannerPicture: any;

    constructor(
        private userService: UserService,
        private formBuilder: FormBuilder,
        private cacheService: CacheService,
        private photosService: PhotosService,
        private loadingService: LoadingService,
        private influencerService: InfluencerService,
        private router: Router,
        private toastr: ToastrService) {
    }

    ngOnInit(): void {

        this.loadingService.enable();

        this.user = this.cacheService.user$.currentValue();

        this.influencerService.getInformation()
            .subscribe(data => {

                this.loadingService.disable();
                this.userForm = this.formBuilder.group({
                    id: [ this.user.id, [ Validators.required ] ],
                    description: [ data.description, [ Validators.required ] ],
                    category: [ data.category, [ Validators.required ] ],
                    name_user: [ this.user.name_user, [ Validators.required ] ],
                    password: [ this.user.unencrypted_password, [ Validators.required ] ],
                    name: [ this.user.name, [ Validators.required ] ],
                    last_name: [ this.user.last_name, [ Validators.required ] ],
                    email: [ this.user.email, [ Validators.required ] ],
                    CC: [ this.user.CC, [ Validators.required ] ],
                    gender: [ this.user.gender, [ Validators.required ] ]
                })
            }, error => this.loadingService.disable())
    }

    public updateUser(): void {
        this.loadingService.enable();
        this.userService.update({...this.user, ...this.userForm.value})
            .subscribe((response: GenericResponse) => {
                this.loadingService.disable();
                this.toastr.success(response.response, 'Update user success!');
            }, error => {
                this.loadingService.disable();
                this.toastr.error(error.error.response, 'Update user error!');
            });
    }

    public changeTypePassword(): void {
        if (this.typePassword === 'password') {
            this.typePassword = 'text';
        } else {
            this.typePassword = 'password';
        }
    }

    public uploadProfileImage(event: any) {
        this.profileImage = event.target.files[0];
    }

    public updateProfileImage(): void {
        this.loadingService.enable();
        const formData = new FormData();

        formData.append('photos', this.profileImage, this.profileImage.name);

        this.photosService.uploadPhotoProfile(formData).subscribe((response: GenericResponse) => {
            this.loadingService.disable();
            this.toastr.success(response.response, 'Image user success!');
        }, (error: any) => {
            this.loadingService.disable();
            this.toastr.error(error.error.response, 'Image user error!');
        });
    }

    public uploadBannerPicture(event: any) {
        this.bannerPicture = event.target.files[0];
    }

    public updateBannerPicture(): void {
        this.loadingService.enable();
        const formData = new FormData();

        formData.append('photos', this.bannerPicture, this.bannerPicture.name);

        this.photosService.uploadPhotoInfluencer(formData).subscribe((response: GenericResponse) => {
            this.loadingService.disable();
            this.toastr.success(response.response, 'Image user success!');
        }, (error: any) => {
            this.loadingService.disable();
            this.toastr.error(error.error.response, 'Image user error!');
        });
    }
}

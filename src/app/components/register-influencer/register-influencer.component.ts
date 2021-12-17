import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { LoadingService } from '../../services/loading.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { GenericResponse } from '../../entities/reponse.interface';
import { InfluencerService } from '../../services/influencer.service';


@Component({
    selector: 'app-register-influencer',
    templateUrl: './register-influencer.component.html',
    styleUrls: [ './register-influencer.component.css' ]
})
export class RegisterInfluencerComponent implements OnInit {

    public registerInfluencerForm: FormGroup | undefined;
    public categories = [
        {value: '1', label: 'Fashion bloggers'},
        {value: '2', label: 'Foodies'},
        {value: '3', label: 'Gamers and technology gurus'},
        {value: '4', label: 'Celebrities and artists'},
        {value: '5', label: 'Fitness and healthy life'}
    ];

    Facebook: boolean = true;
    Twitter: boolean = true;
    Instagram: boolean = true;
    Youtube: boolean = true;
    Snapchat: boolean = true;
    TikTok: boolean = true;
    Kwai: boolean = true;
    Pinterest: boolean = true;
    Twitch: boolean = true;
    Reddit: boolean = true;
    Weibo: boolean = true;
    BiliBili: boolean = true;

    constructor(
        private loadingService: LoadingService,
        private globalService: GlobalService,
        private influencerService: InfluencerService,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private router: Router) {
    }

    ngOnInit(): void {
        this.registerInfluencerForm = this.formBuilder.group({
            description: [ null, [ Validators.required ] ],
            category: [ null, [ Validators.required ] ],
            facebook: [ null ],
            twitter: [ null ],
            instagram: [ null ],
            youtube: [ null ],
            snapchat: [ null ],
            tik_tok: [ null ],
            kawai: [ null ],
            pinterest: [ null ],
            twitch: [ null ],
            reddit: [ null ],
            weibo: [ null ],
            bilibili: [ null ]
        })
    }

    toggleFacebook() {
        this.Facebook = !this.Facebook;
    }

    toggleTwitter() {
        this.Twitter = !this.Twitter;
    }

    toggleInstagram() {
        this.Instagram = !this.Instagram;
    }

    toggleYoutube() {
        this.Youtube = !this.Youtube;
    }

    toggleSnapchat() {
        this.Snapchat = !this.Snapchat;
    }

    toggleTikTok() {
        this.TikTok = !this.TikTok;
    }

    toggleKwai() {
        this.Kwai = !this.Kwai;
    }

    togglePinterest() {
        this.Pinterest = !this.Pinterest;
    }

    toggleTwitch() {
        this.Twitch = !this.Twitch;
    }

    toggleReddit() {
        this.Reddit = !this.Reddit;
    }

    toggleWeibo() {
        this.Weibo = !this.Weibo;
    }

    toggleBiliBili() {
        this.BiliBili = !this.BiliBili;
    }

    public logout(): void {
        this.globalService.logout();
    }

    public registerInfluencer(): void {
        if (this.registerInfluencerForm?.valid) {
            this.loadingService.enable();
            this.influencerService.register(this.registerInfluencerForm?.value)
                .subscribe((response: GenericResponse) => {
                    this.loadingService.disable();
                    this.toastr.success(response.response, 'Register influencer success!');
                    this.router.navigateByUrl('/');
                }, error => {
                    this.loadingService.disable();
                    this.toastr.error(error.error.response, 'Register influencer error!');
                });
        }
    }
}

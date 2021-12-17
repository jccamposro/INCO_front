import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-register-influencer',
    templateUrl: './register-influencer.component.html',
    styleUrls: [ './register-influencer.component.css' ]
})
export class RegisterInfluencerComponent implements OnInit {

    Facebook:boolean=true;
    Twitter:boolean=true;
    Instagram:boolean=true;
    Youtube:boolean=true;
    Snapchat:boolean=true;
    TikTok:boolean=true;
    Kwai:boolean=true;
    Pinterest:boolean=true;
    Twitch:boolean=true;
    Reddit:boolean=true;
    Weibo:boolean=true;
    BiliBili:boolean=true;

    constructor() {
    }

    ngOnInit(): void {
    }

    toggleFacebook(){
        this.Facebook= !this.Facebook;
    }
    toggleTwitter(){
        this.Twitter= !this.Twitter;
    }
    toggleInstagram(){
        this.Instagram= !this.Instagram;
    }
    toggleYoutube(){
        this.Youtube= !this.Youtube;
    }
    toggleSnapchat(){
        this.Snapchat= !this.Snapchat;
    }
    toggleTikTok(){
        this.TikTok= !this.TikTok;
    }
    toggleKwai(){
        this.Kwai= !this.Kwai;
    }
    togglePinterest(){
        this.Pinterest= !this.Pinterest;
    }
    toggleTwitch(){
        this.Twitch= !this.Twitch;
    }
    toggleReddit(){
        this.Reddit= !this.Reddit;
    }
    toggleWeibo(){
        this.Weibo= !this.Weibo;
    }
    toggleBiliBili(){
        this.BiliBili= !this.BiliBili;
    }
}

import { Component, OnInit } from '@angular/core';
import { InfluencerService } from 'src/app/services/influencer.service';
import { UserService } from 'src/app/services/user.service';


@Component({
    selector: 'app-influencer-profile',
    templateUrl: './influencer-profile.component.html',
    styleUrls: [ './influencer-profile.component.css' ]
})
export class InfluencerProfileComponent implements OnInit {

    constructor(public influencerService: InfluencerService,
                public userService: UserService) {

    }
    myData:any;
    misObjetos: any=[];
    myObjStr:any;

    myData2:any;
    misObjetos2: any=[];
    myObjStr2:any;
    facebook: any;
    instagram: any;
    kawai: any;
    pinterest: any;
    reddit: any;
    snapchat: any;
    tik_tok: any;
    twitch: any;
    twitter: any;
    youtube: any;

    name_user :any;
    

    ngOnInit(){
        this.userService.get().subscribe((resp: any) => {
            console.warn(resp);
            this.name_user = resp.user.name_user;
        });

        this.influencerService.get().subscribe(data =>{
            console.warn(data);
              this.myData=data;
              this.myObjStr = JSON.stringify(data);
              this.misObjetos=JSON.parse(this.myObjStr);
              console.log(this.misObjetos.description);
        });
        this.influencerService.getSocialNetworks().subscribe(data2 => {
            console.warn(data2);
            this.myData2 = data2;
            this.myObjStr2 = JSON.stringify(data2);
            this.misObjetos2 = JSON.parse(this.myObjStr2);
            this.facebook = this.misObjetos2.social_networks.facebook
            this.instagram= this.misObjetos2.social_networks.instagram;
            this.kawai= this.misObjetos2.social_networks.kawai;
            this.pinterest= this.misObjetos2.social_networks.pinterest;
            this.reddit= this.misObjetos2.social_networks.reddit;
            this.snapchat= this.misObjetos2.social_networks.snapchat;
            this.tik_tok= this.misObjetos2.social_networks.tik_tok;
            this.twitch= this.misObjetos2.social_networks.twitch;
            this.twitter=this.misObjetos2.social_networks.twitter;
            this.youtube=this.misObjetos2.social_networks.youtube;
            console.log(this.misObjetos2.social_networks.facebook);
        });
    }



}

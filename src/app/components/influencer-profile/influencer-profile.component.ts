import { Component, OnInit } from '@angular/core';
import { InfluencerService } from 'src/app/services/influencer.service';


@Component({
    selector: 'app-influencer-profile',
    templateUrl: './influencer-profile.component.html',
    styleUrls: [ './influencer-profile.component.css' ]
})
export class InfluencerProfileComponent implements OnInit {

    constructor(public influencerService: InfluencerService) {

    }
    myData:any;
    misObjetos: any=[];
    myObjStr:any;
    

    ngOnInit(){
        this.influencerService.get().subscribe(data =>{
            console.warn(data);
              this.myData=data;
              this.myObjStr = JSON.stringify(data);
              this.misObjetos=JSON.parse(this.myObjStr);
              console.log(this.misObjetos.description);
        })
    }



}

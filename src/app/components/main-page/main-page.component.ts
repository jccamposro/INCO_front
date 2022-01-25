import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { InfluencerService } from 'src/app/services/influencer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(public influencerService:InfluencerService, 
              public companyService:CompanyService,
              public userService:UserService) { }

  myData:any;
    misObjetos: any=[];
    myObjStr:any;

    myData2:any;
    misObjetos2: any=[];
    myObjStr2:any;
    isEntrepreneur= false;
    isInfluencer= false;

    ngOnInit(){
        this.userService.get().subscribe((resp:any) => {
          if(resp.user.role == 1){
            this.isEntrepreneur = true;
            
          }else if(resp.user.role == 2){
            this.isInfluencer = true;
          }
        });
        this.influencerService.list().subscribe(data =>{
            console.warn(data);
              this.myData=data;
              this.myObjStr = JSON.stringify(data);
              this.misObjetos=JSON.parse(this.myObjStr);
              console.log(this.misObjetos);
        });
        this.companyService.list().subscribe(data =>{
          console.warn(data);
            this.myData2=data;
            this.myObjStr2 = JSON.stringify(data);
            this.misObjetos2=JSON.parse(this.myObjStr2);
            console.log(this.misObjetos2);
      })
    }

}

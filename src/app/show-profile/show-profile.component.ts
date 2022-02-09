import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { LoadingService } from '../services/loading.service';
import { ScriptsLoadService } from 'src/app/scripts-load.service';
import { CompanyService } from '../services/company.service';
import { InfluencerService } from '../services/influencer.service';
import { GlobalService } from '../services/global.service';
import { VentureService } from '../services/venture.service';
 
@Component({
 selector: 'app-show-profile',
 templateUrl: './show-profile.component.html',
 styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {
 
 idInfluencer:any;
 
 public user: User;
 myData:any;
   misObjetos: any=[];
   myObjStr:any;

  name : any;
  description: any;

   isEntrepreneur = false;
   isInfluencer = false;
 
   constructor(
       private router: Router,
       private userService: UserService,
       private authService: AuthService,
       private globalService: GlobalService,
       private companyService: CompanyService,
       private loadingService: LoadingService,
       private influencerService: InfluencerService,
       private rutaActiva: ActivatedRoute,
       private _scriptsLoad: ScriptsLoadService, 
       private ventureService: VentureService) {
 
       _scriptsLoad.load([ 'userView', 'filter' ])
 
   }
 
  //  get isEntrepreneur(): boolean {
  //      return this.user?.role === 1;
  //  }
 
 ngOnInit(): void {

  this.userService.get().subscribe((resp: any) => {
    if (resp.user.role == 1) {
        this.isEntrepreneur = true;

    } else if (resp.user.role == 2) {
        this.isInfluencer = true;
    }
});
   this.idInfluencer = this.rutaActiva.snapshot.params.id;
   console.log("id que llega d la ruta:", this.idInfluencer)

    this.userService.get().subscribe((resp: any) => {
      if (resp.user.role == 1) {
        this.influencerService.getInfluencersById(this.idInfluencer).subscribe(data => {
          console.warn(data);
          this.myData = data;
          this.myObjStr = JSON.stringify(data);
          this.misObjetos = JSON.parse(this.myObjStr);
          this.name = this.misObjetos.name_user;
          console.log(this.name)
          this.description = this.misObjetos.description;
          console.log(this.description)
      });

        } else if (resp.user.role == 2) {
          this.ventureService.getVenture(this.idInfluencer).subscribe(data => {
            console.warn(data);
            this.myData = data;
            this.myObjStr = JSON.stringify(data);
            this.misObjetos = JSON.parse(this.myObjStr);
            this.name = this.misObjetos.name;
            console.log(this.name)
            this.description = this.misObjetos.description;
        });
        }
    });

   
 }
 
}
 
declare let isotope: any;
declare let lightbox: any;
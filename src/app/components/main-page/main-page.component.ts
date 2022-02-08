import { Component, OnInit } from '@angular/core';
import { VentureService } from 'src/app/services/venture.service';
import { InfluencerService } from 'src/app/services/influencer.service';
import { UserService } from 'src/app/services/user.service';
import { MatchResponse } from '../../entities/reponse.interface';
import { LoadingService } from '../../services/loading.service';
import { ContactService } from '../../services/contact.service';
import { ToastrService } from 'ngx-toastr';
import { UserForMatch, UserForMatchIN } from '../../entities/user.interface';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


export interface User {
    name: string;
  }

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: [ './main-page.component.css' ]
})
export class MainPageComponent implements OnInit {

    constructor(public influencerService: InfluencerService,
                public ventureService: VentureService,
                public userService: UserService,
                private loadingService: LoadingService,
                private service: ContactService,
                private toastr: ToastrService) {
    }
    //Filter
    myControl = new FormControl();
    options: User[] = [{name: 'Mary'}, {name: 'Shelley'}, {name: 'Igor'}];
    filteredOptions: Observable<User[]>;
    //Filter

    myData: any;
    influencers: any = [];
    myObjStr: any;

    myData2: any;
    ventures: any = [];
    myObjStr2: any;
    isEntrepreneur = false;
    isInfluencer = false;

    ngOnInit() {
        this.userService.get().subscribe((resp: any) => {
            if (resp.user.role == 1) {
                this.isEntrepreneur = true;

            } else if (resp.user.role == 2) {
                this.isInfluencer = true;
            }
        });
        this.influencerService.getInfluencers().subscribe(data => {
            console.warn(data);
            this.myData = data;
            this.myObjStr = JSON.stringify(data);
            this.influencers = JSON.parse(this.myObjStr);
            console.log(this.influencers);
        });
        this.ventureService.getCollaborations().subscribe(data => {
            console.warn(data);
            this.myData2 = data;
            this.myObjStr2 = JSON.stringify(data);
            this.ventures = JSON.parse(this.myObjStr2);
            console.log(this.ventures);
        });

        //Filter
        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => (typeof value === 'string' ? value : value.name)),
            map(name => (name ? this._filter(name) : this.options.slice())),
          );
        //Filter
    }


    //Filter
    displayFn(user: User): string {
        return user && user.name ? user.name : '';
      }

      private _filter(name: string): User[] {
        const filterValue = name.toLowerCase();
    
        return this.options.filter(option => option.name.toLowerCase().includes(filterValue));
    }
    //Filter

    public createMatch(userForMatch: UserForMatch): void {
        this.loadingService.enable();

        this.service.createMatch({
            id_user: userForMatch.id_user,
        })
            .subscribe((response: MatchResponse) => {
                this.loadingService.disable();
                this.toastr.success(response.name_user, 'Reject match success!');
            }, error => {
                this.loadingService.disable();
                this.toastr.error(error.error.response, 'Reject match error!');
            });
    }

    public createMatchIn(userForMatchI: UserForMatchIN): void {
        this.loadingService.enable();

        this.service.createMatch({
            id_user: userForMatchI.id_user,
            id_venture: userForMatchI.id_venture,
        })
            .subscribe((response: MatchResponse) => {
                this.loadingService.disable();
                this.toastr.success(response.name_user, 'Reject match success!');
            }, error => {
                this.loadingService.disable();
                this.toastr.error(error.error.response, 'Reject match error!');
            });
    }
}

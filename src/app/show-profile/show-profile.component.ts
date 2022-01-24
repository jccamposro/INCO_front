import { Component, OnInit } from '@angular/core';
import { User } from '../entities/user.interface';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { LoadingService } from '../services/loading.service';
import { ScriptsLoadService } from 'src/app/scripts-load.service';
import { CompanyService } from '../services/company.service';
import { InfluencerService } from '../services/influencer.service';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.component.html',
  styleUrls: ['./show-profile.component.css']
})
export class ShowProfileComponent implements OnInit {

  public user: User;

    constructor(
        private router: Router,
        private userService: UserService,
        private authService: AuthService,
        private globalService: GlobalService,
        private companyService: CompanyService,
        private loadingService: LoadingService,
        private influencerService: InfluencerService,
        private _scriptsLoad: ScriptsLoadService) {

        _scriptsLoad.load([ 'userView' ])

    }

    get isEntrepreneur(): boolean {
        return this.user?.role === 1;
    }

  ngOnInit(): void {
  }

}

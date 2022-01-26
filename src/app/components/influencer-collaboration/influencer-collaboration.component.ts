import { Component, OnInit } from '@angular/core';
import { ScriptsLoadService } from 'src/app/scripts-load.service';

@Component({
    selector: 'app-influencer-collaboration',
    templateUrl: './influencer-collaboration.component.html',
    styleUrls: [ './influencer-collaboration.component.css' ]
})
export class InfluencerCollaborationComponent implements OnInit {

    constructor(private _scriptsLoad: ScriptsLoadService) {

        _scriptsLoad.load([ 'filter' ])

    };

    ngOnInit(): void {
    };

   

}

declare let isotope: any;
declare let lightbox: any;
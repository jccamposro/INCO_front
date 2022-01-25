import { Component, OnInit } from '@angular/core';
import { ScriptsLoadService } from 'src/app/scripts-load.service';

@Component({
    selector: 'app-influencer-score',
    templateUrl: './influencer-score.component.html',
    styleUrls: [ './influencer-score.component.css'],
})
export class InfluencerScoreComponent implements OnInit {

    constructor(private _scriptsLoad: ScriptsLoadService) {
        _scriptsLoad.load([ 'userView' ])    
    }

    ngOnInit(): void {
    }

}

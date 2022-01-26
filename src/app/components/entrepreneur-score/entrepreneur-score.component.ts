import { Component, OnInit } from '@angular/core';
import { ScriptsLoadService } from 'src/app/scripts-load.service';

@Component({
    selector: 'app-entrepreneur-score',
    templateUrl: './entrepreneur-score.component.html',
    styleUrls: [ './entrepreneur-score.component.css' ]
})
export class EntrepreneurScoreComponent implements OnInit {

    constructor(private _scriptsLoad: ScriptsLoadService) {
            _scriptsLoad.load([ 'userView' ])    
        }
    
    ngOnInit(): void {
    }

}

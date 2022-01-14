import { Component, OnInit } from '@angular/core';
import { ScriptsLoadService } from 'src/app/scripts-load.service';

@Component({
    selector: 'app-entrepreneur-collaboration',
    templateUrl: './entrepreneur-collaboration.component.html',
    styleUrls: ['./entrepreneur-collaboration.component.css']
})
export class EntrepreneurCollaborationComponent implements OnInit {

    constructor(private _ScriptLoad: ScriptsLoadService) {
        _ScriptLoad.load(["userView"])
    }

    ngOnInit(): void {
}

}

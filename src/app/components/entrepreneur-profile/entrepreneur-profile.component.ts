import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/entities/company.interface';
import { CompanyService } from 'src/app/services/company.service';

@Component({
    selector: 'app-entrepreneur-profile',
    templateUrl: './entrepreneur-profile.component.html',
    styleUrls: [ './entrepreneur-profile.component.css' ]
})
export class EntrepreneurProfileComponent implements OnInit {

    constructor(public companyService: CompanyService) {
    }

    myData:any;
    misObjetos: any=[];
    myObjStr:any;
    company: Company;

    ngOnInit(){
        this.companyService.get().subscribe(data =>{
            this.company = data.company;
            console.warn(data);
              this.myData=data;
              this.myObjStr = JSON.stringify(data);
              this.misObjetos=JSON.parse(this.myObjStr);
        })
    }

}

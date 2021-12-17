import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenericResponse } from '../../entities/reponse.interface';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../entities/company.interface';
import { LoadingService } from '../../services/loading.service';

@Component({
    selector: 'app-entrepreneur-settings',
    templateUrl: './entrepreneur-settings.component.html',
    styleUrls: [ './entrepreneur-settings.component.css' ]
})
export class EntrepreneurSettingsComponent implements OnInit {

    public companyForm: FormGroup;
    public categories = [
        {value: '1', label: 'Esthetic'},
        {value: '2', label: 'Food'},
        {value: '3', label: 'Sports'},
        {value: '4', label: 'Technology'},
        {value: '5', label: 'Home'}
    ];

    private company: Company;

    constructor(
        private companyService: CompanyService,
        private formBuilder: FormBuilder,
        private loadingService: LoadingService,
        private router: Router,
        private toastr: ToastrService) {
    }

    ngOnInit(): void {
        this.companyService.get()
            .subscribe(company => {
                this.company = company.company;
                this.companyForm = this.formBuilder.group({
                    name: [ this.company.name, [ Validators.required ] ],
                    description: [ this.company.description, [ Validators.required ] ],
                    category: [ this.company.category, [ Validators.required ] ],
                    nit: [ this.company.nit, [ Validators.required ] ],
                    address: [ this.company.address, [ Validators.required ] ],
                    web_domain: [ this.company.web_domain, [ Validators.required ] ],
                    email: [ this.company.email, [ Validators.required ] ],
                    contact_number: [ this.company.contact_number, [ Validators.required ] ]
                })
            })
    }

    public updateCompany(): void {
        this.loadingService.enable();
        this.companyService.update({...this.company, ...this.companyForm.value})
            .subscribe((response: GenericResponse) => {
                this.loadingService.disable();
                this.toastr.success(response.response, 'Update company success!');
            }, error => {
                this.loadingService.disable();
                this.toastr.error(error.error.response, 'Update company error!');
            });
    }
}

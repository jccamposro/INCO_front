import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingService } from '../../services/loading.service';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../../services/company.service';
import { GenericResponse } from '../../entities/reponse.interface';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register-company',
    templateUrl: './register-company.component.html',
    styleUrls: [ './register-company.component.css' ]
})
export class RegisterCompanyComponent implements OnInit {

    public registerCompanyForm: FormGroup | undefined;
    public categories = [
        {value: '1', label: 'Esthetic'},
        {value: '2', label: 'Food'},
        {value: '3', label: 'Sports'},
        {value: '4', label: 'Technology'},
        {value: '5', label: 'Home'}
    ];

    constructor(
        private loadingService: LoadingService,
        private globalService: GlobalService,
        private companyService: CompanyService,
        private formBuilder: FormBuilder,
        private toastr: ToastrService,
        private router: Router) {
    }

    ngOnInit() {
        this.registerCompanyForm = this.formBuilder.group({
            name: [ null, [ Validators.required ] ],
            nit: [ null, [ Validators.required ] ],
            web_domain: [ null, [ Validators.required ] ],
            address: [ null, [ Validators.required ] ],
            description: [ null, [ Validators.required ] ],
            category: [ null, [ Validators.required ] ],
            email: [ null, [ Validators.required ] ],
            contact_number: [ null, [ Validators.required ] ],
        })
    }

    public logout(): void {
        this.globalService.logout();
    }

    public registerCompany(): void {
        if (this.registerCompanyForm?.valid) {
            this.loadingService.enable();
            this.companyService.register(this.registerCompanyForm?.value)
                .subscribe((response: GenericResponse) => {
                    this.loadingService.disable();
                    this.toastr.success(response.response, 'Register company success!');
                    this.router.navigateByUrl('/');
                }, error => {
                    this.loadingService.disable();
                    this.toastr.error(error.error.response, 'Register company error!');
                });
        }
    }

}

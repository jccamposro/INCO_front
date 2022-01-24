import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenericResponse } from '../../entities/reponse.interface';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../entities/company.interface';
import { LoadingService } from '../../services/loading.service';
import { InfluencerService } from 'src/app/services/influencer.service';

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
        private influencerService: InfluencerService,
        private router: Router,
        private toastr: ToastrService) {
    }

    ngOnInit(): void {
        this.loadingService.enable();
        this.companyService.get()
            .subscribe(company => {
                this.loadingService.disable()
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
            }, error => this.loadingService.disable())
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
    files:any;
       uploadImage(event:any){
        this.files = event.target.files[0];
        console.log(this.files)
       }
       enviarImagen1(){
        const formData = new FormData();
        formData.append("photos", this.files, this.files.name);
        console.log(this.files.name);
        this.influencerService.onUpload(formData).subscribe((response: GenericResponse) => {
            this.loadingService.disable();
            this.toastr.success(response.response, 'Image user success!');
        }, (error: any) => {
            this.loadingService.disable();
            this.toastr.error(error.error.response, 'Image user error!');
        });
        
       }
}

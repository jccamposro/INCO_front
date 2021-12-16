import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GenericResponse } from '../../entities/reponse.interface';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { LoadingService } from '../../services/loading.service';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: [ './register.component.css' ]
})
export class RegisterComponent implements OnInit {

    public registerForm: FormGroup;

    constructor(
        private router: Router,
        private toastr: ToastrService,
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private loadingService: LoadingService) {
    }

    ngOnInit(): void {
        this.registerForm = this.formBuilder.group({
            name_user: [ null, [ Validators.required ] ],
            name: [ null, [ Validators.required ] ],
            last_name: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ],
            gender: [ null, [ Validators.required ] ],
            email: [ null, [ Validators.required ] ],
            CC: [ null, [ Validators.required ] ],
            role: [ null, [ Validators.required ] ],
        })
    }

    submitForm() {
        this.loadingService.enable();
        this.authService.sendRegister(this.registerForm.value)
            .subscribe((response: GenericResponse) => {
                this.loadingService.disable();
                this.toastr.success(response.response, 'Register success!');
                this.router.navigateByUrl('/login')
            }, error => {
                this.loadingService.disable();
                this.toastr.error(error.error.response, 'Register error!');
            });
    }
}

import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
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
            profile_picture: 'nofoto.jpg',
        })

    }

    

    get role(): AbstractControl {
        return this.registerForm.get('role');
      }

    submitForm() {
        this.loadingService.enable();
        this.authService.sendRegister(this.registerForm.value)
            .subscribe((response: GenericResponse) => {
                this.loadingService.disable();
                this.toastr.success(response.response, 'Register success!');
                if(this.registerForm.get('role').value == 1){
                    this.router.navigateByUrl('/register-company')
                }else if(this.registerForm.get('role').value == 2){
                    this.router.navigateByUrl('/register-influencer')
                }
                
            }, error => {
                this.loadingService.disable();
                this.toastr.error(error.error.response, 'Register error!');
            });
    }
}

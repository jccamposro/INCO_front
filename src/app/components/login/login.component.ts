import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from '../../services/loading.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup | undefined;
    public typePassword: string = 'password';

    constructor(
        private router: Router,
        private toastr: ToastrService,
        private authService: AuthService,
        private formBuilder: FormBuilder,
        private loadingService: LoadingService) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            name_user: [ null, [ Validators.required ] ],
            password: [ null, [ Validators.required ] ]
        })
    }

    public sendLogin(): void {
        if (this.loginForm?.valid) {
            this.loadingService.enable();
            this.authService.sendLogin(this.loginForm?.value)
                .subscribe((response: { token: string }) => {
                    localStorage.setItem('token', response.token);
                    this.router.navigateByUrl('/');
                    this.loadingService.disable();
                }, error => {
                    this.loadingService.disable();
                    this.toastr.error(error.error.response, 'Login error!');
                });
        }
    }

    public changeTypePassword(): void {
        if (this.typePassword === 'password') {
            this.typePassword = 'text';
        } else {
            this.typePassword = 'password';
        }
    }

}

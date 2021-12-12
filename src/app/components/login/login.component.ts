import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { GenericResponse } from "../../entities/reponse.interface";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    public loginForm: FormGroup | undefined;

    constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            name_user: [null, [Validators.required]],
            password: [null, [Validators.required]]
        })
    }

    public sendLogin(): void {
        if (this.loginForm?.valid) {
            this.authService.sendLogin(this.loginForm?.value.name_user, this.loginForm?.value.password)
                .subscribe((response: GenericResponse) => {
                    if (response.role === 1) {
                        this.router.navigateByUrl('/colab') // aqui va emp
                    } else {
                        this.router.navigateByUrl('/profile')
                    }
                }, error => {
                    this.toastr.error(error.error.response, 'Login error!');
                });
        }
    }

}

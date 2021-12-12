import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { GenericResponse } from "../../entities/reponse.interface";

@Component({
    selector: 'app-reset-pass',
    templateUrl: './reset-pass.component.html',
    styleUrls: ['./reset-pass.component.css']
})
export class ResetPassComponent implements OnInit {
    public resetPassForm: FormGroup | undefined;

    constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) {
    }

    ngOnInit() {
        this.resetPassForm = this.formBuilder.group({
            email: [null, [Validators.required]]
        })
    }

    public sendMail(): void {
        if (this.resetPassForm?.valid) {
            this.authService.sendMail(this.resetPassForm?.value.email)
                .subscribe((response: GenericResponse) => {
                    this.toastr.success(response.response, 'Reset password success!');
                    this.router.navigateByUrl('/login')
                }, error => {
                    this.toastr.error(error.error.response, 'Reset password error!');
                });
        }
    }
}
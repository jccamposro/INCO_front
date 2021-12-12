import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../../services/login-service.service';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    public registerForm: FormGroup;

    constructor(private loginService: LoginServiceService, public fb: FormBuilder, private http: HttpClient) {

        this.registerForm = new FormGroup({
            name_user: new FormControl(''),
            name: new FormControl(''),
            last_name: new FormControl(''),
            password: new FormControl(''),
            gender: new FormControl(''),
            email: new FormControl(''),
            CC: new FormControl(''),
            role: new FormControl('')
        });
    }

    ngOnInit(): void {
    }

    submitForm() {
        this.loginService.storeUser(this.registerForm.value).subscribe((data) => {
                console.log("Formulario subido");
            },
            (error: HttpErrorResponse) => {
                console.log(error);
            });
    }
}

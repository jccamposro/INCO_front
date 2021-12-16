import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../entities/user.interface';
import { GenericResponse } from '../../entities/reponse.interface';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-influencer-settings',
    templateUrl: './influencer-settings.component.html',
    styleUrls: [ './influencer-settings.component.css' ]
})
export class InfluencerSettingsComponent implements OnInit {

    public userForm: FormGroup;
    public typePassword: string = 'password';

    private user: User;

    constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) {
    }

    ngOnInit(): void {
        this.userService.get()
            .subscribe(user => {
                this.user = user.user;
                this.userForm = this.formBuilder.group({
                    id: [ this.user.id, [ Validators.required ] ],
                    name_user: [ this.user.name_user, [ Validators.required ] ],
                    password: [ this.user.unencrypted_password, [ Validators.required ] ],
                    name: [ this.user.name, [ Validators.required ] ],
                    last_name: [ this.user.last_name, [ Validators.required ] ],
                    email: [ this.user.email, [ Validators.required ] ],
                    CC: [ this.user.CC, [ Validators.required ] ],
                    gender: [ this.user.gender, [ Validators.required ] ]
                })
            })
    }

    public updateUser(): void {
        this.userService.update({...this.user, ...this.userForm.value})
            .subscribe((response: GenericResponse) => {
                this.toastr.success(response.response, 'Update user success!');
            }, error => {
                this.toastr.error(error.error.response, 'Update user error!');
            });
    }

    public changeTypePassword(): void {
        if (this.typePassword === 'password') {
            this.typePassword = 'text';
        } else {
            this.typePassword = 'password';
        }
    }

}

import { Component, OnInit } from '@angular/core';
import { UserService } from "../../services/user.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../entities/user.interface";
import { GenericResponse } from "../../entities/reponse.interface";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-influencer-conf',
    templateUrl: './influencer-conf.component.html',
    styleUrls: ['./influencer-conf.component.css']
})
export class InfluencerConfComponent implements OnInit {

    public userForm: FormGroup;

    private user: User;

    constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router, private toastr: ToastrService) {
    }

    ngOnInit(): void {
        this.userService.get(1)
            .subscribe(user => {
                this.user = user;
                this.userForm = this.formBuilder.group({
                    id: [user.id, [Validators.required]],
                    name_user: [user.name_user, [Validators.required]],
                    password: [user.password, [Validators.required]],
                    name: [user.name, [Validators.required]],
                    last_name: [user.last_name, [Validators.required]],
                    email: [user.email, [Validators.required]],
                    CC: [user.CC, [Validators.required]],
                    gender: [user.gender, [Validators.required]]
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

}

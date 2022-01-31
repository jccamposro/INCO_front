import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GenericResponse } from 'src/app/entities/reponse.interface';
import { AuthService } from 'src/app/services/auth.service';
import { VentureService } from 'src/app/services/venture.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-entrepreneur-create',
  templateUrl: './entrepreneur-create.component.html',
  styleUrls: ['./entrepreneur-create.component.css']
})
export class EntrepreneurCreateComponent implements OnInit {

  public entrepreneurForm: FormGroup;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private loadingService: LoadingService,
    private ventureService: VentureService) {
}

  ngOnInit(): void {

    this.entrepreneurForm = this.formBuilder.group({
      name: [ null, [ Validators.required ] ],
      description: [ null, [ Validators.required ] ],
      // venture_picture: [ null, [ Validators.required ] ],
  })
  }

  submitForm() {
    this.loadingService.enable();
    this.ventureService.registerVenture(this.entrepreneurForm.value)
        .subscribe((response: GenericResponse) => {
            this.loadingService.disable();
            this.toastr.success(response.response, 'Register success!');
        }, error => {
            this.loadingService.disable();
            this.toastr.error(error.error.response, 'Register error!');
        });
}

}

import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {TokenStorageService} from "../../service/token-storage.service";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  // @ts-ignore
  public createUserForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private fb: FormBuilder) {
    if (this.tokenStorage.getUser()) {
      this.router.navigate(['main']);
    }
  }

  ngOnInit(): void {
    this.createUserForm = this.createLoginForm();
  }


  createLoginForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.compose([Validators.required])],
      lastName: ['', Validators.compose([Validators.required])],
      phone: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
      role: ['', Validators.compose([Validators.required])],
    });
  }

  submit(): void {
    this.authService.createUser(
      this.createUserForm.value.firstName,
      this.createUserForm.value.lastName,
      this.createUserForm.value.email,
      this.createUserForm.value.phone,
      this.createUserForm.value.password,
      this.createUserForm.value.role
    ).subscribe(data => {
      console.log(data);

      this.router.navigate(['/']);
      window.location.reload();
    }, error => {
      console.log(error);
    });
  }

}

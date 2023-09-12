import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserControllerService } from '../api';
import { first } from 'rxjs';
import { Router } from '@angular/router';
import { confirmPasswordValidator } from '../validators/confirm.password.validator';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  registerForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private userControllerService: UserControllerService, private formBuilder: FormBuilder, private router: Router){}

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
  },
  {
    validator: confirmPasswordValidator("password","confirmPassword")
  }
  );
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit(){
    console.log("'I'm here")
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    this.userControllerService.save(this.registerForm.value).pipe(first()).subscribe(
      data => {
        alert("Registration Success!!!");
        this.router.navigate(["/signin"]);
      },
      error => {
        alert(error);
        this.loading = false;
      }
    );
  }
}

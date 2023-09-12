import { Component, OnInit } from '@angular/core';
import { UserControllerService } from '../api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(private userControllerService: UserControllerService, 
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(){
    console.log("Here!!!")
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        console.log("Hi")
        return;
      }
      this.loading = true;
      this.userControllerService.login(this.f['email'].value, this.f['password'].value)
      .pipe(first()).subscribe(
        res => {
          console.log("res: ",res)
          this.router.navigate(["/products"])
        },
        error => {
            alert(error)
            this.loading = false;
        })
  }

}

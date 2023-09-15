import { Component, Injectable, OnInit } from '@angular/core';
import { UserControllerService } from '../api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;

  constructor(private userControllerService: UserControllerService, 
    private formBuilder: FormBuilder, 
    private route: ActivatedRoute, 
    private router: Router){}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit(){
    console.log("Here!!!")
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        console.log("Hi");
        return;
      }
      this.loading = true;
      this.userControllerService.login(this.loginForm.value)
      .pipe(first()).subscribe(
        res => {
          // console.log("res: ",res);
          if (res.role === "user"){
            this.router.navigate(["/products"]);
          }
          if (res.role === "admin"){
            this.router.navigate(["/home"]);
          }

          if (res) {
            localStorage.setItem('currentUser', JSON.stringify(res));
        }
          
        },
        error => {
            alert("Invalid Login")
            this.loading = false;
        })
  }
 

}

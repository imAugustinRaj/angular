import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const { username, password } = this.form.value;
    console.log(username, password);
    const url = '/api/login';
    const body = {
      username,
      password
    };

    this.http.post(url, body).subscribe(
      (response: any) => {
        if (response.status === 200) {
          // Login successful
          console.log('Login successful');
        } else {
          // Login failed
          console.log('Login failed');
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

}
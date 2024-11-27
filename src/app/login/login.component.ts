import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // นำเข้า FormsModule
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import Swal from 'sweetalert2';
import { Router } from '@angular/router'; // Import the Router class
import { SnowflakesComponent } from '../snowflakes/snowflakes.component';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule, CommonModule , SnowflakesComponent]
})
export class LoginComponent {
  signupData = {
    username: '',
    password: '',
    confirmPassword: ''
  };
  loginData = {
    username: '',
    password: ''
  }

  constructor(private http: HttpClient, private router: Router) {} // Add Router as a dependency

  onSignup() {
    if (this.signupData.password !== this.signupData.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Signup failed',
        text: 'รหัสผ่านไม่ตรง'
      });
      return;
    }

    const apiUrl = environment.APISIGNUPUSER;
    const payload = {
      username: this.signupData.username,
      password: this.signupData.password
    };

    this.http.post(apiUrl, payload).subscribe(
      (response) => {
        console.log('Signup successful:', response);
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Signup successful!',
          confirmButtonText: 'OK'
        }).then((result) => {
          if (result.isConfirmed) {
            location.reload();
          }
        });    
      },
      (error) => {
        console.error('Signup failed:', error);
        Swal.fire({
          icon: 'error',
          title: 'Signup failed',
          text: 'Please try again.'
        });
      }
    );
  }
  onLogin() {
    const apiUrl = environment.APILOGIN;
    const payload = {
      username: this.loginData.username,
      password: this.loginData.password
    };

    this.http.post(apiUrl, payload).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Login failed:', error);
        Swal.fire({
          icon: 'error',
          title: 'Login failed',
          text: 'Please try again.'
        });
      }
    );
  }
}

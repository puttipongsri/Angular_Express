import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // นำเข้า FormsModule
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [FormsModule, CommonModule] // เพิ่ม FormsModule
})
export class LoginComponent {
  signupData = {
    username: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private http: HttpClient) {}

  onSignup() {
    if (this.signupData.password !== this.signupData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const apiUrl = 'http://localhost:8000/users/post';
    const payload = {
      username: this.signupData.username,
      password: this.signupData.password
    };

    this.http.post(apiUrl, payload).subscribe(
      (response) => {
        console.log('Signup successful:', response);
        alert('Signup successful!');
      },
      (error) => {
        console.error('Signup failed:', error);
        alert('Signup failed! Please try again.');
      }
    );
  }
}

import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';


export const routes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
    { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] }
];
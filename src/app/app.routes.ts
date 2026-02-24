import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Home } from './home/home';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'login', component: Login },
//   { path: 'register', component: Register },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // default route
  { path: '**', redirectTo: '/login' }, // wildcard fallback
];

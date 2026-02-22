import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Footer } from "./footer/footer";
import { Register } from "./register/register"; 
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, Register],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {
  protected readonly title = signal('cinecomplex-admin');
}
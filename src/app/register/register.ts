import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';
@Component({
  selector: 'app-register',
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  user = {
    name: '',
    email: '',
    contact: '',
    password: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.user);
    // TODO: Can we use here toast to show user registeration details instead of alert?
    // Its available in used bootswatch theme. But I am not sure how to use it in angular.
    // Show Bootstrap toast
    const toastEl = document.getElementById('registerToast');
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    } 
  }

  onClear() {
    this.user = { name: '', email: '', contact: '', password: '' };
  }
}

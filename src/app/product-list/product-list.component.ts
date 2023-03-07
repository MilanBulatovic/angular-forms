import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @ViewChild('f') signupForm: NgForm;
  submitted: boolean = false;
  products = products;
  user = {
    username: '',
    password: '',
    email: '',
    newsletter: '',
    accepted: '',
    message: '',
  };

  share() {
    window.alert('The product has been shared!');
  }
  onSubmit(form: NgForm) {
    console.log(form);
    this.user.username = this.signupForm.value.userData.username;
    this.user.password = this.signupForm.value.userData.password;
    this.user.email = this.signupForm.value.userData.email;
    this.user.newsletter = this.signupForm.value.userData.newsletter;
    this.user.accepted = this.signupForm.value.userData.accepted;
    this.user.message = this.signupForm.value.userData.message;
    this.submitted = true;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

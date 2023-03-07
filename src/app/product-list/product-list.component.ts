import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    this.submitted = true;
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/

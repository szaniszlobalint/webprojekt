import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {PRODUCTS} from '../data/product.database';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent implements OnInit, OnDestroy {
  form: FormGroup = new FormGroup({
    id: new FormControl(''),
    href: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
    isBundle: new FormControl(''),
    isCustomerVisible: new FormControl(''),
    name: new FormControl('', Validators.required),
    orderDate: new FormControl(''),
    productSerialNumber: new FormControl(''),
    startDate: new FormControl(''),
    terminationDate: new FormControl(''),
    status: new FormControl('')
  });

  products = PRODUCTS;
  category?= '';

  constructor() { }

  ngOnInit(): void {
    this.category = 'product';
  }

  ngOnDestroy(): void {
    delete this.category;
  }

}

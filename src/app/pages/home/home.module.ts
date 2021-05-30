import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavModule } from './../nav/nav.module';
import { ProductCardModule } from './../product-card/product-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductModule } from './../add-product/add-product.module';
import { HomeRoutingModule } from './home-routing.module';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';







@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NavModule,
    ProductCardModule,
    FormsModule,
    AddProductModule,
    HomeRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule

  ],
  exports: [HomeComponent],
})
export class HomeModule { }

import { AddProductComponent } from './add-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: AddProductComponent,
        data: { title: 'Hozzáadás - Webkert' }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AddProductRoutingModule { }

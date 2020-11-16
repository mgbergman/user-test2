import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserListComponent} from "./user/user-list/user-list.component";
import {UserEditComponent} from "./user/user-edit/user-edit.component";
import { VendorListComponent} from "./vendor/vendor-list/vendor-list.component";
import { UserCreateComponent} from "./user/user-create/user-create.component";
import { VendorEditComponent} from "./vendor/vendor-edit/vendor-edit.component";
import { VendorCreateComponent} from "./vendor/vendor-create/vendor-create.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductEditComponent } from "./product/product-edit/product-edit.component";


const routes: Routes = [
  { path: "", redirectTo: "/users/list", pathMatch: "full"},
  { path: "users/list", component: UserListComponent},
  { path: "users/edit/:id", component: UserEditComponent},
  { path: "vendors/list", component: VendorListComponent},
  { path: "users/create", component: UserCreateComponent},
  { path: "vendors/edit/:id", component: VendorEditComponent},
  { path: "vendors/create", component: VendorCreateComponent},
  { path: "products/list", component: ProductListComponent},
  { path: "products/edit/:id", component: ProductEditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

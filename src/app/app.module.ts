import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { BoolDisplayPipe } from './pipes/bool-display.pipe';
import { PasswordPipe } from './pipes/password.pipe';
import { UserSearchPipe } from './user/user-search.pipe';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserEditComponent,
    VendorListComponent,
    UserCreateComponent,
    VendorEditComponent,
    BoolDisplayPipe,
    PasswordPipe,
    UserSearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

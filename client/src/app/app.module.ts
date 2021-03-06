import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { ProductsComponent } from './components/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule} from '@angular/material/form-field'; 
import { MatSelectModule} from '@angular/material/select'; 
import { MatInputModule} from '@angular/material/input';
import { MatDialogModule} from '@angular/material/dialog'; 
import { AddProductComponent } from './components/products/add-product/add-product.component';
import { EditProductComponent } from './components/products/edit-product/edit-product.component';
import { DeleteProductComponent } from './components/products/delete-product/delete-product.component';
import { ToastrModule } from 'ngx-toastr';
import { NgxUiLoaderModule } from "ngx-ui-loader";


const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'products', component: ProductsComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    EditProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatSidenavModule,
    MatTableModule,
    MatIconModule,
    FontAwesomeModule,
    MatButtonModule,
    MatExpansionModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    ToastrModule.forRoot(),
    NgxUiLoaderModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductService } from './product.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, 
         MatCardModule, 
         MatGridListModule, 
         MatInputModule, 
         MatDividerModule, 
         MatChipsModule,
         MatToolbarModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    MatChipsModule, 
    MatToolbarModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }

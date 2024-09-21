import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import { ProductCalcaComponent } from './product-calca/product-calca.component';
import { ProductRadioComponent } from './product-radio/product-radio.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductTenisComponent } from './product-tenis/product-tenis.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    ProductCalcaComponent,
    ProductRadioComponent,
    ProductDetailsComponent,
    ProductTenisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

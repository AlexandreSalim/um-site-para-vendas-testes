import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { ProductCalcaComponent } from './product-calca/product-calca.component';
import { ProductRadioComponent } from './product-radio/product-radio.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductTenisComponent } from './product-tenis/product-tenis.component';

const routes: Routes = [
  { path: '', component: AboutComponent},


  {
    path: '', component: HomeComponent, children: [
      //alheio
      { path: 'product/:id', component: ProductComponent },
      { path: 'product/:category/:productName', component:  ProductDetailsComponent },
      
      // calça
      { path: 'product-calca/:id', component: ProductCalcaComponent },
      { path: 'product-calca/:category/:productName', component:  ProductDetailsComponent },
      
      //radios e celulares
      { path: 'product-radio/:id', component: ProductRadioComponent },
      { path: 'product-radio/:category/:productName', component:  ProductDetailsComponent },

      //tenis
      {path: 'product-tenis/:id', component: ProductTenisComponent},
      {path: 'product-tenis/:category/:productName', component: ProductDetailsComponent},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

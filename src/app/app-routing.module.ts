import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: 'product-details',
    loadChildren: () => import('./modules/product-details/product-details.module').then(m => m.ProductDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes
  )],
  exports: [RouterModule]
})

export class AppRoutingModule {
}

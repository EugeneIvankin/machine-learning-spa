import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from '@app/shared/main-layout/main-layout.component';

const routes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: MainLayoutComponent,
  children: [
    // { path: '', component: HeaderComponent, outlet: 'header' },
    // { path: '', component: HomePageComponent, resolve: {data: LoaderResolver} },
    // { path: '', component: ThickFooterComponent, outlet: 'footer' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

}

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthPageComponent, UserPageComponent } from "@app/modules/auth/conteiners";

const routes: Routes =
  [
    { path: 'auth', component: AuthPageComponent },
    { path: 'user', component: UserPageComponent }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRouterModule {
}

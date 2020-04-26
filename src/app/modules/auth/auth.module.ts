import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { LoginFormComponent, UserDetailsComponent } from '@app/modules/auth/components';
import { SingFormComponent } from '@app/modules/auth/components';
import { AuthRouterModule } from "@app/modules/auth/auth-router.module";
import { AuthPageComponent, UserPageComponent } from "@app/modules/auth/conteiners";
import { AuthEffects } from "@app/modules/auth/store/effects/auth.effect";
import { reducer } from "@app/modules/auth/store/reducers";
import { AuthService } from "@app/modules/auth/services";
import { AuthLocalDataSource } from "@app/modules/auth/data-sources/auth.local.data-source";

@NgModule({
  declarations: [
    LoginFormComponent,
    SingFormComponent,
    AuthPageComponent,
    UserPageComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule,
    AuthRouterModule,
    ReactiveFormsModule,
    StoreModule.forFeature('user', reducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  providers: [
    AuthService,
    AuthLocalDataSource
  ]
})
export class AuthModule { }

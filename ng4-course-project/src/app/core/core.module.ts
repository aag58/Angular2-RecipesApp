import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {HeaderComponent} from './header/header.component';
import {SharedModule} from '../shared/shared.module';
import {AppRoutingModule} from '../app-routing.module';
import {AuthGaurdService} from '../auth/auth-gaurd.service';
import {AuthService} from '../auth/auth.service';
import {RecipeStorageService} from '../shared/recipe-storage.service';
import {RecipeService} from '../recipes/recipe.service';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {AuthInterceptor} from '../shared/auth.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {LoggingInterceptor} from '../shared/logging.interceptor';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  exports: [
    AppRoutingModule,
    HeaderComponent

  ],
  providers: [ShoppingListService, RecipeService, RecipeStorageService, AuthService, AuthGaurdService,
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},  // intercept in orders of providers
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true}]
})
export class CoreModule {}

import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ShoppingListComponent} from './shopping-list/shopping-list.component';
import {HomeComponent} from './core/home/home.component';

const appRoutes: Routes = [
  // {path: '', redirectTo : '/recipes', pathMatch: 'full'},
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
  {path: 'shopping-list', component: ShoppingListComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}

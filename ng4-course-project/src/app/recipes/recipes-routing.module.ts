import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipesComponent} from './recipes.component';
import {RecipeStartComponent} from './recipe-start/recipe-start.component';
import {RecipeEditComponent} from './recipe-edit/recipe-edit.component';
import {RecipeDetailComponent} from './recipe-detail/recipe-detail.component';
import {AuthGaurdService} from '../auth/auth-gaurd.service';
import {SharedModule} from '../shared/shared.module';

const recipeRoutes: Routes = [
  {path: '', component: RecipesComponent, children: [
    {path: '' , component: RecipeStartComponent},
    {path: 'new' , component: RecipeEditComponent, canActivate: [AuthGaurdService]},
    {path: ':id' , component: RecipeDetailComponent},
    {path: ':id/edit' , component: RecipeEditComponent, canActivate: [AuthGaurdService]}
  ]},
]
@NgModule({
  imports: [
    RouterModule.forChild(recipeRoutes)
  ],
  exports: [
    RouterModule,
    SharedModule
  ]
})
export class RecipesRoutingModule {}
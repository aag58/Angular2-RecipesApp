import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class RecipeService {

  recipeChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
  new Recipe('pasta' ,
    'Arabita penne Pasta with extra cheese!!!' ,
    'http://assets.epicurious.com/photos/55f72d733c346243461d496e/2:1/w_1260%2Ch_630/09112015_15minute_pastasauce_tomato.jpg',
    [new Ingredient('onions' , 2) , new Ingredient('garlic', 1), new Ingredient('tomatoes', 3), new Ingredient('pene pack', 1)]
  ),
    new Recipe('Schezwaan noodles' ,
    'yummy Schezwaan noodles , Easy and fast to make' ,
    'https://i.ytimg.com/vi/Z2NOnuaO0E4/hqdefault.jpg',
      [new Ingredient('noodles pack' , 1) , new Ingredient('garlic', 1), new Ingredient('red sauce', 1), new Ingredient('oil', 1)]),

    new Recipe('burger' ,
      'black beans burger, ' ,
      'https://www.redrobin.com/content/dam/web/menu/tavern-menu/sir-acha-tavern-double-burger-217.jpg',
      [new Ingredient('buns' , 2) , new Ingredient('meat', 1), new Ingredient('sauce', 1), new Ingredient('black-beans', 1)]),

    new Recipe('burger' ,
      'black beans burger, ' ,
      'https://www.redrobin.com/content/dam/web/menu/tavern-menu/sir-acha-tavern-double-burger-217.jpg',
      [new Ingredient('buns' , 2) , new Ingredient('meat', 1), new Ingredient('sauce', 1), new Ingredient('black-beans', 1)])

  ];

  constructor(private slService: ShoppingListService) {}

  setRecipe(recipes: Recipe[]) {

    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipe() {
    return this.recipes.slice();
  }

  getRecipeItem(id: number) {
    return this.recipes[id];
  }

  AddRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.recipeChanged.next(this.recipes.slice());
  }

}

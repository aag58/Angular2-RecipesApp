import {Ingredient} from '../shared/ingredient.model';

import {Subject} from 'rxjs/Subject';

export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  editItemStarted = new Subject<number>();


  // private ingredients: Ingredient[] = [
  //   new Ingredient('apples',  2),
  //   new Ingredient('bananas',  2)
  // ];

  private ingredients: Ingredient[] = [new Ingredient('apples',  2)];

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addShoppingList(ingredients: Ingredient[]) {
    // this.ingredients.concat(ingredient);
    // ingredient.forEach((item) => this.ingredients.push(item))
    this.ingredients.push(...ingredients)
    console.log(this.ingredients)
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

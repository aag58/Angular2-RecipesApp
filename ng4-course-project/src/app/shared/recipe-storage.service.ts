import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/Rx';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders, HttpParams, HttpRequest} from '@angular/common/http';
@Injectable()
export class RecipeStorageService {
  constructor(private httpClient: HttpClient, private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipe() {
    const token = this.authService.getToken();
    // const headers = new HttpHeaders().set('Authorization', 'Bearer Aditya');
    // // return this.httpClient.put('https://ng-recipe-book-77039.firebaseio.com/recipes.json?auth=' + token,
    // return this.httpClient.put('https://ng-recipe-book-77039.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipe(),
    //   {observe: 'body',
    //     // headers: new HttpHeaders().set('Authorization', 'Bearer Aditya')
    //     // headers: headers
    //     params: new HttpParams().set('auth', token)
    //   });

    const req = new HttpRequest('PUT', 'https://ng-recipe-book-77039.firebaseio.com/recipes.json',
                      this.recipeService.getRecipe(), {reportProgress: true, params: new HttpParams().set('auth', token)});

   return this.httpClient.request(req);
  }

  getRecipe() {
      const token = this.authService.getToken();
      // this.httpClient.get<Recipe[]>('https://ng-recipe-book-77039.firebaseio.com/recipes.json?auth=' + token)
      this.httpClient.get<Recipe[]>('https://ng-recipe-book-77039.firebaseio.com/recipes.json?auth=' + token,
        {observe: 'body',
                responseType: 'json'})
      .map(
        (recipes) => {
            for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              console.log(recipe)
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipe: Recipe[]) => {

          this.recipeService.setRecipe(recipe);
        }
      );
  }
}

import {Component} from '@angular/core';
import {RecipeStorageService} from '../../shared/recipe-storage.service';
import {AuthService} from '../../auth/auth.service';
import {HttpEvent, HttpEventType} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl : 'header.component.html',
  styleUrls : ['header.component.css']
})
export class HeaderComponent {


  constructor(private recipeStorage: RecipeStorageService,
              private authService: AuthService) {}

  onSaveData() {
      this.recipeStorage.storeRecipe()
        .subscribe(
          (response) => {
            console.log(response);
          }
        );
  }

  onFetchData() {
    this.recipeStorage.getRecipe();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}

import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  nav = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA443Z0WbuhhWUu8pltn_MJ6MB1qhvkCJ0',
      authDomain: 'ng-recipe-book-77039.firebaseapp.com'
    });
  }

  onNavigate(onNavigated: string) {
    this.nav = onNavigated;
  }
}

import { FavoriteChangedEventArgs} from "./favorite/favorite.component"
import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite: true
  };

  OnFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
    console.log('Favorite changed: ', eventArgs)
  }


}

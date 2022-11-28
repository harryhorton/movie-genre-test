import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MovieService } from './movie.service';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  public $menuVisibility = new BehaviorSubject<boolean>(false);

  constructor() {}

  toggleMenu() {
    this.$menuVisibility.next(!this.$menuVisibility.value);
  }
}

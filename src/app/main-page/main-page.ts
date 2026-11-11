import { Component } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss'
})
export class MainPage {
  posts: Post[] = [
    {
      name: 'Banana',
      img: 'assets/banana.jpg',
      likes: 120
    },
    {
      name: 'Currant',
      img: 'assets/currant.jpg',
      likes: 85
    },
    {
      name: 'Orange',
      img: 'assets/orange.jpg',
      likes: 240
    }
  ];
}
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
      likes: 120,
      liked: false
    },
    {
      name: 'Currant',
      img: 'assets/currant.jpg',
      likes: 85,
      liked: false
    },
    {
      name: 'Orange',
      img: 'assets/orange.jpg',
      likes: 240,
      liked: false
    }
  ];

  subscribers = [
    { name: 'Anna Müller', following: true },
    { name: 'Bernd Schmidt', following: false },
    { name: 'Clara Fischer', following: true },
    { name: 'David Weber', following: false },
    { name: 'Eva Becker', following: true }
  ];

  // 하트 클릭 시 실행되는 토글 함수
  toggleLike(post: Post) {
    post.liked = !post.liked;
    if (post.liked) {
      post.likes++;
    } else {
      post.likes--;
    }
  }
}
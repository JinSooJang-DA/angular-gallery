import { Component } from '@angular/core';
import { MainPage } from './main-page/main-page';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
import { Component, OnInit, NgModule } from '@angular/core';
import { Card } from '../card';

@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {
  card: Card = {
    image: "assets/quantum-photo.png",
    alt_text: "Quantum Circuit Photo"
  };

  constructor() { }

  ngOnInit() {
  }

}

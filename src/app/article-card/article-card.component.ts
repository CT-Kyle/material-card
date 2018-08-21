import { Component, OnInit, NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  imports: [MatCardModule]
})
@Component({
  selector: 'app-article-card',
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

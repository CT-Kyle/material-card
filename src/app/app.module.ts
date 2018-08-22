import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { CardContentComponent } from './card-content/card-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleCardComponent,
    CardContentComponent
  ],
  imports: [
    MatCardModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

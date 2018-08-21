import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageThumbnailComponent } from './image-thumbnail/image-thumbnail.component';
import { ArticleCardComponent } from './article-card/article-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageThumbnailComponent,
    ArticleCardComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import {MatCardModule} from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ImageThumbnailComponent } from './image-thumbnail/image-thumbnail.component';
import { ArticleCardComponent } from './article-card/article-card.component';
import { CardContentComponent } from './card-content/card-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ImageThumbnailComponent,
    ArticleCardComponent,
    CardContentComponent
  ],
  imports: [
    MatCardModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

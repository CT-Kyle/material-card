import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-thumbnail',
  templateUrl: './image-thumbnail.component.html',
  styleUrls: ['./image-thumbnail.component.css']
})
export class ImageThumbnailComponent implements OnInit {
  name = 'image';

  constructor() { }

  ngOnInit() {
  }

}

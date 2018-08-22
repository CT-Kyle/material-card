import { Component, OnInit } from '@angular/core';
import { Content } from '../content';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {
  content: Content = {
    date: "September 4, 2014",
    title: "Google Building Quantum Computing Processors",
    text: "Google has teamed up with a group of university scientists in California in an effort to build quantum information processors..."
  };

  constructor() { }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';
//import { read } from 'fs';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postTitle: string;  // 1* permet de rendre définisable la variable par le component parent html
  @Input() postContent: string;    // Permet de créer des propriétes personalisées
  @Input() postLoveIts: number;
  @Input() postCreated_at: Date;  

  

  totalLoves = 0;
  onLoveIts() {
    this.totalLoves++;
  }

  totalHates = 0;
  onHateIts() {
    this.totalHates++;
  }

  getColor() {
    if(this.totalLoves == this.totalHates){
      return 'black';
    } else if(this.totalLoves > this.totalHates){
      return 'green';
    } else if (this.totalLoves < this.totalHates){
      return 'red';
    }
    
  }

  constructor() { }

  ngOnInit() {
  }

}

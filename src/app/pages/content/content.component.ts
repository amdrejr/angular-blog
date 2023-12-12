import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {dataFake} from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photo:string = ''
  title:string = ''
  description:string = ''
  private id:string|null = ''

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id') );

    this.setValuesToComponent(this.id!);
  }

  setValuesToComponent(id:string) {
    const result = dataFake.filter(article => article.id == id)[0];
    this.photo = result.photo;
    this.title = result.title;
    this.description = result.description;

    console.log(result);
  }
}

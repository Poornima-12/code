import { Component, OnInit } from '@angular/core';
import {TimestoriesService} from './../timestories.service'
@Component({
  selector: 'app-timestory',
  templateUrl: './timestory.component.html',
  styleUrls: ['./timestory.component.css']
})
export class TimestoryComponent implements OnInit {

  time:any=[]
  constructor(private postdata:TimestoriesService){}


  ngOnInit(): void {
   this.time=this.postdata.getpost().subscribe(data=>this.time=data)
  }

}

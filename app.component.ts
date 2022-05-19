import { Component } from '@angular/core';
import {TimestoriesService} from './timestories.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'time-assignment';
  time:any=[]
  constructor(private postdata:TimestoriesService){}

  ngOnInit(){
    
    this.postdata.getpost().subscribe(data=>this.time=data)
  }
}

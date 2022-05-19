import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import {Time} from './timestory'

@Injectable({
  providedIn: 'root'
})
export class TimestoriesService {

  constructor(private http:HttpClient ) { }
  time=[]
  private url:string="../assets/timestory.json"
  getpost(){
    return this.http.get<Time[]>(this.url)
  }
}

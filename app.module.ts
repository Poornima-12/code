import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TimestoriesService } from './timestories.service';
import { TimestoryComponent } from './timestory/timestory.component'
@NgModule({
  declarations: [
    AppComponent,
    TimestoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [TimestoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

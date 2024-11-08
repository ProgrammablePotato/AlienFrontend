import { Component } from '@angular/core';
import { BaseService } from './base.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AlienFrontend';
  oszlopok=[
    {key:"name",text:"name",type:"text"},
    {key:"description",text:"Description",type:"text"},
    {key:"attitude",text:"Attitude",type:"text"},
    {key:"population",text:"Population",type:"number"}
  ]

  aliens:any
  newAlien:any={}

  constructor(private base:BaseService) {
    base.getAliens().subscribe(
      (res)=>this.aliens=res

    )
  }
}

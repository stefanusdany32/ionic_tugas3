import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-halaman2',
  templateUrl: './halaman2.page.html',
  styleUrls: ['./halaman2.page.scss'],
})
export class Halaman2Page implements OnInit {
  private object : obj;
  private myarray: any[] = new Array<object>();
  constructor(private global: GlobalvarService) { }

  ngOnInit() {
    this.myarray = this.global.getall()
    console.log("hal2")
    console.log(this.myarray)
  }
  fav(ind : number){
    console.log(ind)
    this.global.changetofav(ind)
  }
  unfav(ind : number){
    this.global.changetounfav(ind)
  }

}
export class obj{
  id : number
  judul:string;
  isi:string;
  date : Date;
  fav:Boolean;
}
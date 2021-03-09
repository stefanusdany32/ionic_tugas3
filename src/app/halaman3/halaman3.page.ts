import { Component, OnInit } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-halaman3',
  templateUrl: './halaman3.page.html',
  styleUrls: ['./halaman3.page.scss'],
})
export class Halaman3Page implements OnInit {


  private object : obj;
  private myarray: any[] = new Array<object>();
  constructor(private global: GlobalvarService) { }
  status : string = "FAVORITE"
  ngOnInit() {
    this.myarray = this.global.getall()
    console.log("hal3")
    console.log(this.myarray)
  }

}
export class obj{
  id : number
  judul:string;
  isi:string;
  date : Date;
  fav:Boolean;
}
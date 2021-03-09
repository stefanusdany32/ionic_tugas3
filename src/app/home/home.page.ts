import { Component } from '@angular/core';
import { GlobalvarService } from '../globalvar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private global : GlobalvarService) {}
  judul : string = ""
  isi : string = ""
  tgl : Date 
  submit(){
    this.global.add(this.judul,this.isi,this.tgl);
  }
}

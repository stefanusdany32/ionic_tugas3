import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalvarService {
  private object : obj;
  private myarray: any[] = new Array<object>();
  private count = 0
  constructor() { }
  add(jdl : string, isi : string, tgl :Date){
    let temp : obj = {
      id : this.count,
      judul : jdl,
      isi : isi,
      date : tgl,
      fav : false
    }
      this.myarray.push(temp)
      console.log(temp)
      this.count = this.count +1;
  }
  getobj(index:number){
     return this.myarray[index]
   }
   changetofav(index:number){
       this.myarray[index].fav = true
       console.log( this.myarray[index].fav)
   }
   changetounfav(index:number){
    this.myarray[index].fav = false
    console.log( this.myarray[index].fav)
   }
   getall(){
     //console.log("get all")
    // console.log(this.myarray)
     return this.myarray
   }
}

export class obj{
  id : number
  judul:string;
  isi:string;
  date : Date;
  fav:Boolean;
}
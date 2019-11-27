import { Component, OnInit } from '@angular/core';
import { Candidates, HttpserviceService } from '../httpservice.service';
import { check } from '../items.modal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent implements OnInit {
  user:Candidates
  name:string
  email:string
  age:string
  selected:string
  rec:check[]=[{name:"0",value:0},{name:"1",value:1}]
  password:string
  rec1=-1
  constructor(private httpClient:HttpserviceService) { }

  ngOnInit() {
  }

submit(){
  
  console.log(this.selected)
  if(this.selected=="DXC")
  {
    this.rec1=1;
    console.log(this.rec1)
  }
  else
  {
    this.rec1=0;
    console.log("ok,again")
  }
  this.user=new Candidates(this.name,this.email,this.password,[],this.age,this.rec1,0,[],[])
  console.log(this.user)
  this.httpClient.createCandidate(this.user).subscribe(data=>{alert("User Created")
console.log(data)
})
}
}

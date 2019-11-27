import { Component, OnInit } from '@angular/core';
import { HttpserviceService, Candidates } from '../httpservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users:Candidates[]=[]
  username:string
  password:string
  flag:number=0
  constructor(private httpClient:HttpserviceService,private router:Router) { }

  ngOnInit() {
  this.httpClient.getCandidate().subscribe(response=>{this.users=response})
  }

login(){
  
  this.users.forEach(item=>{
    if(item.username==this.username && item.password==this.password)
    {alert("Login successful")
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['userHome/'+item.id]);
  }); 
   this.flag=1
  }  
    

  })

  if(this.flag==0)
  {
    alert("Login unsuccessful")
  }
}

}

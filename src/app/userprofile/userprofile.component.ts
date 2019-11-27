import { Component, OnInit } from '@angular/core';
import { Candidates, HttpserviceService } from '../httpservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  candidate:Candidates
  list:Candidates[]
  id:string
  dxc:string
  constructor(private httpclient:HttpserviceService,private route:ActivatedRoute) { }

  ngOnInit() {
   this.id=this.route.snapshot.paramMap.get("bounce")
   this.httpclient.getCandidate().subscribe(response=>{
   this.list=response
   this.list.forEach(item=>{
     if(this.id==item.id)
     {
       this.candidate=item
     }

   }) 
   if(this.candidate.dxc==1)
   {
     this.dxc="DXC"
   }
   else
   {
     this.dxc="Freelancer"
   }
   })
   
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpserviceService, Posts } from '../httpservice.service';

@Component({
  selector: 'app-addposts',
  templateUrl: './addposts.component.html',
  styleUrls: ['./addposts.component.css']
})
export class AddpostsComponent implements OnInit {
  post:Posts
  projectname:string
  description:string
  price:string
  credits:string
  constructor(private httpClient:HttpserviceService) { }

  ngOnInit() {
    
  }

create(){
  this.post=new Posts(this.projectname,this.description,this.price,this.credits,[],[])
  this.httpClient.createPosts(this.post).subscribe(response=>{alert("Posted Successfully")})
}

}

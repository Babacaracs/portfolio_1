import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router, ActivatedRoute ,ParamMap} from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})
export class BlogPage implements OnInit {
  public selectedId;

  constructor(public http: HttpClient,private router: Router, private route: ActivatedRoute) { }
  httpdata;
  ngOnInit() {
    this.http.get("https://babacars.promo-21.codeur.online/symfony/public/api/articles.json")
    .subscribe((data) => this.displaydata(data)); 
    this.route.paramMap.subscribe((params:ParamMap) =>{ 
      let id = parseInt(params.get('id'));
         this.selectedId=id;     
   });   
  }
  displaydata(data) 
  {
    this.httpdata = data;
    console.log(this.httpdata);
 
 
 }
  onSelect(data)
  {
 this.router.navigate(['/blog',data.id])
 
  }
  isSelected(data) { return data === this.selectedId; }
 
 
}


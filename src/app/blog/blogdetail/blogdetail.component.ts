import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blogdetail',
  templateUrl: './blogdetail.component.html',
  styleUrls: ['./blogdetail.component.scss']
})
export class BlogdetailComponent implements OnInit {
  public blogId;

  constructor(private http: HttpClient,private route: ActivatedRoute,private router: Router) { }
  httpdata;
  ngOnInit() {
  
  this.http.get("https://babacars.promo-21.codeur.online/symfony/public/api/articles.json")
    .subscribe((data) => this.displaydata(data));

   
    this.route.paramMap.subscribe((params:ParamMap) =>{ 
         let id = parseInt(params.get('id'));
            this.blogId=id;
      });
  }

  
  gotoEntreprise() {
    let selectedId = this.blogId ? this.blogId : null;
    //this.router.navigate(['/entreprise', {id: selectedId}]);   
    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.route });
  }
  displaydata(data) {this.httpdata = Array.of( data[this.blogId-1]);
  
  }
}
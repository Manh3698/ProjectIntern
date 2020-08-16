import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  list;
  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.homeService.gettypeProduct().subscribe((data:any)=>{
      this.list = data;
      console.log(this.list);
    });

  }

}

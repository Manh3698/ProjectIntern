import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HomeService } from '../homepage/home.service';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  constructor(private httpClient : HttpClient , private hompageService : HomeService , private route : ActivatedRoute) { }

  ngOnInit(): void {

  }
  // tao doi tuong img chua path forder acess
}

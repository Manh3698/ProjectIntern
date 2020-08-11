import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
    $(document).ready(function () {
      $("#owl-similar-post").owlCarousel({
          loop: true,
          autoplay: true,
          navigation: true,
          slideSpeed: 400,
          paginationSpeed: 400,
          items: 1,
          nav: true,
          navText: ["<i class='fa fa-angle-left fa-3x'></i>", "<i class='fa fa-angle-right fa-3x'></i>"],
      });
  });
  }

}

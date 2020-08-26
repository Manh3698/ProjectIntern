import { Component, OnInit } from '@angular/core';
import { DetailProductService } from './detail-product.service';
import { ConstantPool } from '@angular/compiler';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor(private detailPriductService : DetailProductService) { }
  
  product;

  ngOnInit(): void {

    this.detailPriductService.getProductById(5).subscribe((data:any)=>{
      this.product = data ;
      console.log("data : " + this.product);
    });

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

      $("#showPhone").click(function(){
        $(this).css("display:none")
      })
      
  });

  

  }



}

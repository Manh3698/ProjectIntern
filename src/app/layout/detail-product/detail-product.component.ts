import { Component, OnInit } from '@angular/core';
import { DetailProductService } from './detail-product.service';
import { ConstantPool } from '@angular/compiler';
import { TransfereService } from 'src/app/_services/transfere.service';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor(private detailPriductService : DetailProductService, private transfereService : TransfereService) { }
  
  product = {
    title : "",
    district: "",
    province :"", 
    price : "", 
    typeName : "", 
    accountDTO:({
      phone : "",
      lastName : "",
      firstName : "",
    }),
    description : "",
    typeProductDTO :({
      groupProductDTO :({
        groupName : ""
      }),
      typeName : ""
    }),
    
    imageDTOs:([
      {
        imageName : ""
      },
      {
        imageName : ""
      }
    ])

  };
  id = this.transfereService.getData();
  

  ngOnInit(): void {
    $('.showPhone').on('click', function () {
      $(this).hide(1);
      $('.callPhone').show(1);
    });
    this.detailPriductService.getProductById(this.id).subscribe((data:any)=>{
      console.log(this.id);
      this.product = data ;
      console.log(this.product);
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

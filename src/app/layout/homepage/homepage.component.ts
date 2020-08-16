import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  typeProduct;

  constructor(private homepageService : HomeService , private router : Router ) { }

  ngOnInit(): void {
    this.homepageService.getTypeProduct().subscribe((data:any)=>{
      this.typeProduct = data;
      console.log(this.typeProduct);
    });

  }

  images = [
    {
      "url":"./assets/img/category/logo-xeco.png",
      "name":"Xe Cộ"
    },
     {
      "url":"./assets/img/category/logo-bds.png",
      "name":"Bất Động Sản"
    },
    {
      "url":"./assets/img/category/logo-dodientu.png",
      "name":"Đồ Điện Tử"
    },
     {
      "url":"./assets/img/category/logo-thoitrang-dodungcanhan.png",
      "name":"Thời Trang - Đồ Dùng Cá Nhân"
    },
    {
      "url":"./assets/img/category/logo-noithat.png",
      "name":"Nội Thất"
    },
     {
      "url":"./assets/img/category/logo-giaitrithethaodulich.png",
      "name":"Giải Trí , Thể Thao và Du Lịch"
    },
    {
      "url":"./assets/img/category/logo-dodungvanphong.png",
      "name":"Đồ Dùng Văn Phòng"
    },
     {
      "url":"./assets/img/category/logo-dichvu-vieclam.png",
      "name":"Dịch Vụ - Thời Trang"
    },
    {
      "url":"./assets/img/category/logo-danhmuckhac.png",
      "name":"Danh Mục Khác"
    },
  ]
}

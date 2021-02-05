import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  constructor() { }

  images: string[] = [
    'assets/images/banner-1.JPG',
    'assets/images/banner-2.JPG',
    'assets/images/banner-3.JPG'
  ]

  ngOnInit(): void {
  }

}

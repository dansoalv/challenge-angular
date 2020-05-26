import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  imgMain = '../../assets/bisi1.jpg';
  imgProducts = [
    '../../assets/bisi2.jpg',
    '../../assets/bisi3.jpg',
    '../../assets/bisi4.jpg',
    '../../assets/bisi5.jpg',
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onChangeImg(img) {
    this.imgMain = img;
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/cart.service';
import { Drug } from 'src/app/models/drug.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() drug = {} as Drug;

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    const images: typeof drug.image = [];
    const drug  = this.drug;

    drug.image.forEach((image) => {
      const i = image
      i.previewUrl = environment.baseApiUrl  + image.url
      images.push(i);
    })

    this.drug = {...drug, image: images}     
  }

  onAddToCart() {
    this.cartService.addDrugToCart(this.drug);
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Drug } from '../models/drug.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  drugs = new BehaviorSubject<Drug[]>([])

  constructor() { }

  public addDrugToCart(drug: Drug) {
    this.drugs.next([...this.drugs.value, drug]);
  }

  public removeDrugFromCart(drug: Drug) {
    const newDrugs = this.drugs.value.filter((d) => d.id !== drug.id);
    this.drugs.next(newDrugs);
  }
}

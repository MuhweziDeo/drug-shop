import { Component, OnInit } from '@angular/core';
import { Drug } from 'src/app/models/drug.model';
import {DrugListServiceService} from "../drug-list-service.service";

@Component({
  selector: 'app-drug-list',
  templateUrl: './drug-list.component.html',
  styleUrls: ['./drug-list.component.scss']
})
export class DrugListComponent implements OnInit {
  drugs: Drug[] = []
  count: number = 0;
  loading: boolean = false;
  loaderContentList = new Array(20);
  constructor(private service: DrugListServiceService) { }

  ngOnInit(): void {
    this.loading = true;
    this.service.loadResults().subscribe(([results, count]) => {
      this.drugs = results;
      this.count = count;
      this.loading = false;
    }, err => {this.loading = false;})
  }

}

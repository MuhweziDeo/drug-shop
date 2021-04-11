import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { environment } from "../../environments/environment";
import {Observable, forkJoin} from "rxjs";
import {Drug} from "../models/drug.model";

@Injectable({
  providedIn: 'root'
})
export class DrugListServiceService {
  API_URL = environment.baseApiUrl
  constructor(private http: HttpClient) { }

  public getDrugs(): Observable<Drug[]> {
    return  this.http.get<Drug[]>(`${this.API_URL}/drugs`)
  }

  public  getDrugCount(): Observable<number> {
    return this.http.get<number>(`${this.API_URL}/drugs/count`);
  }

  public loadResults() {
    return forkJoin([this.getDrugs(), this.getDrugCount()])
  }
}

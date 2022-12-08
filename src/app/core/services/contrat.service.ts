import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrat } from '../model/contrat';

@Injectable({
  providedIn: 'root'
})
export class ContratService {
  public url : 'http://localhost:8080/contrats';

  constructor( private http : HttpClient) { }
  getList(){
    this.http.get<Contrat[]>(this.url);
  }

}

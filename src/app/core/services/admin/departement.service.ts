import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartementService {

  constructor(private httpClient: HttpClient) { }


  get(path: string) {
    return this.httpClient.get(environment.PathRoot + path);
  }

  add(path: string, requestBody: Object) {
    return this.httpClient.post(environment.PathRoot + path, requestBody);
  }

  delete(path: string, elementId: number) {
    return this.httpClient.delete(environment.PathRoot + path + '/' + elementId);
  }

  update(path: string, elementId: number, requestBody: Object) {
    return this.httpClient.put(
      environment.PathRoot + path + '/' + elementId, requestBody
    );
  }

}

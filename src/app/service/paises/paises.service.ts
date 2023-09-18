import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  //private API_SERVER = "http://localhost:8080/api/v1/paises/";
  private API_SERVER = "http://localhost:8080/paises/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPaises(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }
}

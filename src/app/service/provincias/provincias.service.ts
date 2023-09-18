import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProvinciasService {

  private API_SERVER = 'http://localhost:8080/provincias/';

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllProvinciasByPais(PaisId: any): Observable<any>{
    return this.httpClient.get(this.API_SERVER + PaisId);
  }
}

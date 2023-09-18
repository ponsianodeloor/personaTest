import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private API_SERVER = "http://localhost:8080/personas/";

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPersonas(): Observable<any> {
    return this.httpClient.get(this.API_SERVER);
  }

  public savePersona(persona: any): Observable<any> {
    return this.httpClient.post(this.API_SERVER, persona);
  }

}

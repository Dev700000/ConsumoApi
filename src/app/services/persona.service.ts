import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
 url = 'https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole';
  constructor(
    private http:HttpClient
    ) {
    console.log('Servicio persona')
   }
    getPersonas(){
    let header = new HttpHeaders().set('Type-content','aplication/json')
    return this.http.get(this.url,{
      headers: header
    }
      
      );
  }
}

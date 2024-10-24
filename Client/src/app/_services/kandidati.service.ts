import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KandidatiService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  dohvatiSve(){
    return this.http.get<any>(this.baseUrl + 'kandidat');
  }

  dohvatiPoId(id: any){
    return this.http.get<any>(this.baseUrl + 'kandidat/' + id);
  }

  spremiNovog(model: any){
    return this.http.post(this.baseUrl + 'kandidat', model);
  }

  obrisi(id: number){
    return this.http.delete(this.baseUrl + 'kandidat/'+id);
  }

  azuriraj(model: any){
    return this.http.put(this.baseUrl + 'kandidat/'+ model.id, model);
  }
}

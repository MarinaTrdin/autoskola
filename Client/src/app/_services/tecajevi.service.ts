import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TecajiService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  dohvatiSve(){
    return this.http.get<any>(this.baseUrl + 'tecaj');
  }
  
  dohvatiPoId(id: any){
    return this.http.get<any>(this.baseUrl + 'tecaj/' + id);
  }

  spremiNovog(model: any){
    return this.http.post(this.baseUrl + 'tecaj', model);
  }

  obrisi(id: number){
    return this.http.delete(this.baseUrl + 'tecaj/'+id);
  }

  azuriraj(model: any){
    return this.http.put(this.baseUrl + 'tecaj/'+ model.id, model);
  }
}

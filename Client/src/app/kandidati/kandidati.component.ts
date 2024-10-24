import { Component, OnInit } from '@angular/core';
import { KandidatiService } from '../_services/kandidati.service';
import { ToastrService } from 'ngx-toastr';
import { Kandidat } from '../_modeli/kandidat';

@Component({
  selector: 'app-kandidati',
  templateUrl: './kandidati.component.html',
  styleUrls: ['./kandidati.component.css']
})
export class KandidatiComponent implements OnInit{

  kandidati: Kandidat[] = [];

  constructor(private kandidatiService: KandidatiService, private toastr: ToastrService){}

  ngOnInit(): void {
    console.log("init");
    this.dohvatiKandidate();
  }

  dohvatiKandidate(){
    this.kandidatiService.dohvatiSve().subscribe({
      next: response => {
       
        let korisniciData = response["$values"];
      
        console.log("Data");
        console.log(korisniciData);
      
        korisniciData.forEach((item: any) => {
          const kandidat: Kandidat = {
            id: item.id,
            ime: item.ime,
            prezime: item.prezime,
            oib: item.oib,
            telefon: item.telefon,
            tecaj: item.tecaj
          }

          this.kandidati.push(kandidat);
          console.log("kandidati", this.kandidati);
        });
      },
      error: error => {
        console.error(error);
      }
    });
  }

  obrisi(kandidat: any){
    this.kandidatiService.obrisi(kandidat.id).subscribe({
      next: response => {
        console.log(response);
        const index = this.kandidati.indexOf(kandidat);
        this.kandidati.splice(index, 1);
        this.toastr.success("Kandidat obrisan");
      },
      error: error => {
        this.toastr.error("Dogodila se greška");
      }
    })
  }

}

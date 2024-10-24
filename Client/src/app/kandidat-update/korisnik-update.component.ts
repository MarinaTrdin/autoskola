import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KandidatiService } from '../_services/kandidati.service';
import { ToastrService } from 'ngx-toastr';
import { Kandidat } from '../_modeli/kandidat';
import { Tecaj } from '../_modeli/tecaj';
import { TecajiService } from '../_services/tecajevi.service';

@Component({
  selector: 'app-kandidat-update',
  templateUrl: './kandidat-update.component.html',
  styleUrls: ['./kandidat-update.component.css']
})
export class KandidatUpdateComponent implements OnInit{

  kandidat: any = {
    id: 0,
    ime: '',
    prezime: '',
    oib: '',
    telefon: '',
    tecajId: ''
  }

  tecajevi: Tecaj[] = [];


  kandidatID: string = "";

  constructor(
    private route: ActivatedRoute, 
    private kandidatiService: KandidatiService,
    private tecajeviService: TecajiService,
     private toastr: ToastrService,
    ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.kandidatID = params['id'];
      this.dohvatiKandidataPoId();
      this.dohvatiTecajeve();
    });
  }

  dohvatiKandidataPoId(){
    this.kandidatiService.dohvatiPoId(this.kandidatID).subscribe({
      next: response => {
        console.log("Response", response);

        this.kandidat = {
          id: response.id,
          ime: response.ime,
          prezime: response.prezime,
          oib: response.oib,
          telefon: response.telefon,
          tecajId: response.tecaj.id
        }

        console.log("Kandidat data", this.kandidat);
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    }
    )
  }

  spremi(){
    console.log(this.kandidat);
    // const updateModel = {...this.korisnik};

    this.kandidatiService.azuriraj(this.kandidat).subscribe({
      next: response => {
        console.log(response);
        this.toastr.success("Spremljeni podaci kandidata.");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška.");
      }
    })
  }

  dohvatiTecajeve(){
    this.tecajeviService.dohvatiSve().subscribe({
      next: success => {
        console.log(success);
        const tecajeviData = success["$values"];

        tecajeviData.forEach((tecajItem: any) => {
          const tecaj: Tecaj = {
            id: tecajItem.id,
            naziv: tecajItem.naziv,
            trajanje: tecajItem.trajanje,
            cijena: tecajItem.cijena
          }

          this.tecajevi.push(tecaj);
          console.log("tecajevi", this.tecajevi);
        });
      },
      error: error => {
        console.error(error);
      }
    })
  }

}

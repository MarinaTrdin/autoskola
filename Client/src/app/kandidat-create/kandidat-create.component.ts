import { Component } from '@angular/core';
import { KandidatiService } from '../_services/kandidati.service';
import { ToastrService } from 'ngx-toastr';
import { TecajiService } from '../_services/tecajevi.service';
import { Tecaj } from '../_modeli/tecaj';

@Component({
  selector: 'app-kandidat-create',
  templateUrl: './kandidat-create.component.html',
  styleUrls: ['./kandidat-create.component.css']
})
export class KandidatCreateComponent {

  kandidat: any = {
    id: 0,
    ime: '',
    prezime: '',
    oib: '',
    telefon: '',
    tecajId: ''
  }

  tecajevi: Tecaj[] = [];

  constructor(
    private kandidatiService: KandidatiService,
    private tecajeviService: TecajiService,
    private toastr: ToastrService,
  ){}

  ngOnInit(){
    this.dohvatiTecaje();
  }

  dohvatiTecaje(){
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

  spremi(){
    console.log("Korisnik za spremiti", this.kandidat);

    this.kandidatiService.spremiNovog(this.kandidat).subscribe({
      next: response => {
          console.log(response);
          this.toastr.success("Kandidat spremljen");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }

}

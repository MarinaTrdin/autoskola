import { Component, OnInit } from '@angular/core';
import { TecajiService } from '../_services/tecajevi.service';
import { Tecaj } from '../_modeli/tecaj';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tecajevi',
  templateUrl: './tecajevi.component.html',
  styleUrls: ['./tecajevi.component.css']
})
export class TecajeviComponent implements OnInit{

  tecajevi: Tecaj[] = [];

  constructor(private tecajeviService: TecajiService, private toastrService: ToastrService
  ){}

  ngOnInit(): void {
    this.dohvatiTecajeve();
 //   this.dohvatiDjelatnike();
  }

  dohvatiTecajeve(){
    this.tecajevi = [];
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


  obrisi(id: number){
    this.tecajeviService.obrisi(id).subscribe({
      next: success => {
        this.toastrService.success("Tečaj obrisan");
        this.dohvatiTecajeve();
      },
      error: error => {
        console.error(error);
        this.toastrService.error("Dogodila se greška");
      }
    })
  }

 
}

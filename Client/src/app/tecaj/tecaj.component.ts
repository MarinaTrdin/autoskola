import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TecajiService } from '../_services/tecajevi.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tecaj',
  templateUrl: './tecaj.component.html',
  styleUrls: ['./tecaj.component.css']
})
export class TecajComponent implements OnInit {

  tecajID: string = '';
  tecaj = {
    id: '',
    naziv: '',
    trajanje: '',
    cijena: 0
  }

  constructor(private route: ActivatedRoute, private tecajeviService: TecajiService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.tecajID = params['id'];
      this.dohvatiTecajPoId();
      

    });
  }

  dohvatiTecajPoId(){
    this.tecaj = {
      id: '',
      naziv: '',
      trajanje: '',
      cijena: 0
    }
    this.tecajeviService.dohvatiPoId(this.tecajID).subscribe({
      next: response => {
        console.log(response);
        this.tecaj = {
          id: response.id,
          naziv: response.naziv,
          trajanje: response.trajanje,
          cijena: response.cijena
        }
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }

  uredi(){
    this.tecaj.id = this.tecajID;

    this.tecajeviService.azuriraj(this.tecaj).subscribe({
      next: response => {
          console.log(response);
          this.toastr.success("Spremljeni podaci tečaja.");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }


}

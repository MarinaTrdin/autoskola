import { Component } from '@angular/core';
import { TecajiService } from '../_services/tecajevi.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-tecaj-create',
  templateUrl: './tecaj-create.component.html',
  styleUrls: ['./tecaj-create.component.css']
})
export class TecajCreateComponent {

  tecaj = {
    id: '',
    naziv: '',
    trajanje: '',
    cijena: 0
  }

  constructor(private tecajeviService: TecajiService, private toastr: ToastrService){}

  ngOnInit(): void {
    
  }



  spremi(){

    this.tecajeviService.spremiNovog(this.tecaj).subscribe({
      next: response => {
          console.log(response);
          this.toastr.success("Tečaj spremljen");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }

}

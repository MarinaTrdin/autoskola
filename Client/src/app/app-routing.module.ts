import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KandidatiComponent } from './kandidati/kandidati.component';
import { TecajeviComponent } from './tecajevi/tecajevi.component';
import { TecajComponent } from './tecaj/tecaj.component';
import { KandidatUpdateComponent } from './kandidat-update/korisnik-update.component';
import { KandidatCreateComponent } from './kandidat-create/kandidat-create.component';
import { TecajCreateComponent } from './tecaj-create/tecaj-create.component';

const routes: Routes = [
  {path: '', component: TecajeviComponent},
  {path: 'tecajevi', component: TecajeviComponent},
  {path: 'tecaj/:id', component: TecajComponent},
  {path: 'tecaj-create', component: TecajCreateComponent},
  {path: 'kandidati', component: KandidatiComponent},
  {path: 'kandidat-update/:id', component: KandidatUpdateComponent},
  {path: 'kandidat-create', component: KandidatCreateComponent},
  {path: '**', component: TecajeviComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

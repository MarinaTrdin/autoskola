import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { TecajComponent } from './tecaj/tecaj.component';
import { TecajeviComponent } from './tecajevi/tecajevi.component';
import { KandidatiComponent } from './kandidati/kandidati.component';
import { NavComponent } from './nav/nav.component';
import { KandidatUpdateComponent } from './kandidat-update/korisnik-update.component';
import { FormsModule } from '@angular/forms';
import { KandidatCreateComponent } from './kandidat-create/kandidat-create.component';
import { TecajCreateComponent } from './tecaj-create/tecaj-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TecajComponent,
    TecajeviComponent,
    KandidatiComponent,
    KandidatUpdateComponent,
    NavComponent,
    KandidatCreateComponent,
    TecajCreateComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

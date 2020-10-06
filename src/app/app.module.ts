import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CentroComponent } from './centro/centro.component';
import { ListaProfComponent } from './lista-prof/lista-prof.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { RodapeComponent } from './rodape/rodape.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CentroComponent,
    ListaProfComponent,
    ListaCursosComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

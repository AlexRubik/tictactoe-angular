import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParticleBgComponent } from './particle-bg/particle-bg.component'
import { NgParticlesModule } from "ng-particles";
import { MatButtonModule } from "@angular/material/button"


@NgModule({
  declarations: [
    AppComponent,
    SquareComponent,
    BoardComponent,
    ParticleBgComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgParticlesModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

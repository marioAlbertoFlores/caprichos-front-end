// componentes
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './routes/app.routes';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
    declarations: [
      AppComponent,
      HomeComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      MatSlideToggleModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  
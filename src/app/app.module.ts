import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

// Modulos
import { PagesModule } from './pages/pages.module';
import { CommonModule } from '@angular/common';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// servicios
import { ServiceModule } from './services/service.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ServiceModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

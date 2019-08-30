import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'

// Modulos
import { PagesModule } from './pages/pages.module';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';


// servicios
import { SharedService } from './services/shared.service';
import { SidebarService } from './services/sidebar.service';
import { CommonModule } from '@angular/common';

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
    CommonModule
  ],
  providers: [
    SharedService,
    SidebarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

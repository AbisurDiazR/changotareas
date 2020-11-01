import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { TaskComponent } from './components/task/task.component';
import { PrivateTaskComponent } from './components/private-task/private-task.component';
import {  } from 'rxjs';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { HomeComponent } from './components/home/home.component';
import { RegistroestudiantesComponent } from './components/registroestudiantes/registroestudiantes.component';
import { RegistromaestrosComponent } from './components/registromaestros/registromaestros.component';
import { SesionmaestrosComponent } from './components/sesionmaestros/sesionmaestros.component';
import { SesionestudiantesComponent } from './components/sesionestudiantes/sesionestudiantes.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    TaskComponent,
    PrivateTaskComponent,
    HomeComponent,
    RegistroestudiantesComponent,
    RegistromaestrosComponent,
    SesionmaestrosComponent,
    SesionestudiantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//importamos el guard para proteger las rutas
import { AuthGuard } from './guards/auth.guard';

//componentes
import { HomeComponent } from './components/home/home.component';
import { SesionestudiantesComponent } from './components/sesionestudiantes/sesionestudiantes.component';
import { SesionmaestrosComponent } from './components/sesionmaestros/sesionmaestros.component';
import { RegistroestudiantesComponent } from './components/registroestudiantes/registroestudiantes.component';
import { RegistromaestrosComponent } from './components/registromaestros/registromaestros.component';
import { ChatComponent } from './components/chat/chat.component';
import { PendingComponent } from './components/pending/pending.component';
import { SuccessComponent } from './components/success/success.component';
import { FailureComponent } from './components/failure/failure.component';
import { SolicitudComponent } from './components/solicitud/solicitud.component';
import { WpComponent } from './components/wp/wp.component';
import { WpDashboardComponent } from './components/wp-dashboard/wp-dashboard.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sesionestudiantes',
    component: SesionestudiantesComponent
  },
  {
    path: 'sesionmaestros',
    component: SesionmaestrosComponent
  },
  {
    path: 'registroestudiantes',
    component: RegistroestudiantesComponent
  },
  {
    path: 'registromaestros',
    component: RegistromaestrosComponent
  },
  {
    path: 'chat/:id',
    component: ChatComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'failure',
    component: FailureComponent
  },
  {
    path: 'success',
    component: SuccessComponent
  },
  {
    path: 'pending',
    component: PendingComponent
  },
  {
    path: 'solicitud',
    component: SolicitudComponent
  },
  {
    path: 'wp',
    component: WpComponent
  },
  {
    path: 'wp-dashboard',
    component: WpDashboardComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

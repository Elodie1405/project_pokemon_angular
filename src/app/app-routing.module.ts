import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    // path = va regarder ce qu'il se passe dans localhost:4200, s'il n'y a rien, affiche moi le component home, on peut aussi mettre home et si on se trouve sur http://localhost:4200/home cela nous affichera le component home
    path:'', 
    component:HomeComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'detail/:id',
    component:DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

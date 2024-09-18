import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { DegreesComponent } from './components/degrees/degrees.component';

const routes: Routes = [
    {path:'inicio', component:PrincipalComponent},
    {path:'perfil/:id', component:ProfileComponent},
    {path:'experiencia', component:ExperienceComponent},
    {path:'grados', component:DegreesComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutes {}
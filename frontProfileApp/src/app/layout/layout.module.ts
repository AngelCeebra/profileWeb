import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutes } from '../app.routes';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  exports : [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    AppRoutes
  ]
})
export class LayoutModule { }

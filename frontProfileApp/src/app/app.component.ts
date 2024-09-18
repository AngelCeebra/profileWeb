import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{

  imageIndex='/assets/img/code-wallpaper.png';
  loading = false;

  constructor(
    private router: Router,
    private spinner: NgxSpinnerService
  ) {}
    
  ngOnInit() {
    this.loading = true;
    if(this.loading === true) {
      this.spinner.show();
    }
    setTimeout(() => {
      this.spinner.hide();
      this.router.navigate(['/inicio']);
      this.loading = false;
    }, 3000);
  }

}

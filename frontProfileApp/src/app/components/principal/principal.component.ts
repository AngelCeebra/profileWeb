import { Component, OnInit } from '@angular/core';
import { Profile } from '../../models/profile';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {
  
  profiles: Profile[];
  title = 'Perfiles';

  constructor(private service: ProfileService) {}

  ngOnInit(): void {
      this.service.profilesList().subscribe(profiles => this.profiles = profiles);
  }

}

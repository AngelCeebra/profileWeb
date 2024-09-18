import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Profile } from '../../models/profile';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {

  imageIndex='/assets/img/code-wallpaper.png';
  profile: Profile = new Profile();

  constructor(private service: ProfileService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id:number = +params.get('id');
      if(id) {
        this.service.profile(id).subscribe(profile => this.profile = profile)
      }
    })
      //this.service.profilesList().subscribe(profiles => this.profiles = profiles);
  }

}

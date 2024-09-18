package com.microserevices.profile.app.controllers;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.microserevices.profile.app.commons.controllers.CommonController;
import com.microserevices.profile.app.models.entity.Profile;
import com.microserevices.profile.app.services.IProfileService;

@RestController
public class ProfileController extends CommonController<Profile, IProfileService>{
	
	@PutMapping("/{id}")
	public ResponseEntity<?> edit(@RequestBody Profile profile, @PathVariable Long id) {
		Optional<Profile> op = service.findById(id);
		
		if(op.isEmpty()) {
			return ResponseEntity.notFound().build();
		}
		
		Profile profileDb = op.get();
		profileDb.setName(profile.getName());
		profileDb.setLastName(profile.getLastName());
		profileDb.setmLastName(profile.getmLastName());
		profileDb.setBirthdate(profile.getBirthdate());
		profileDb.setProfession(profile.getProfession());
		profileDb.setPlaceOfBirth(profile.getPlaceOfBirth());
		profileDb.setPlaceOfResidence(profile.getPlaceOfResidence());
		profileDb.setPhoneNumber(profile.getPhoneNumber());
		profileDb.setEmail(profile.getEmail());
		profileDb.setLinkedIn(profile.getLinkedIn());
		profileDb.setGithub(profile.getGithub());
		profileDb.setDescription(profile.getDescription());
		
		return ResponseEntity.status(HttpStatus.CREATED).body(service.save(profileDb));
	}
	
}

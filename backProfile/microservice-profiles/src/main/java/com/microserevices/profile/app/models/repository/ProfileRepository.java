package com.microserevices.profile.app.models.repository;

import org.springframework.data.repository.CrudRepository;

import com.microserevices.profile.app.models.entity.Profile;

public interface ProfileRepository extends CrudRepository<Profile, Long> {

	
	
}

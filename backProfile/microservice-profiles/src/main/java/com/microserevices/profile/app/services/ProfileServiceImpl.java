package com.microserevices.profile.app.services;

import org.springframework.stereotype.Service;

import com.microserevices.profile.app.commons.services.CommonServiceImpl;
import com.microserevices.profile.app.models.entity.Profile;
import com.microserevices.profile.app.models.repository.ProfileRepository;

@Service
public class ProfileServiceImpl extends CommonServiceImpl <Profile, ProfileRepository> implements IProfileService {
	
	
	
}

package com.boyonglab.ecommerce.profile;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.*;

@RestController
public class UProfileController {

	@Autowired
    private ProfileRepository profileRepository;

	@PostMapping("/api/profile")
	public Profile createProfile(@RequestBody Profile profile) {
        return profileRepository.save(profile);
    }

	@PutMapping("/api/profile/{oid}")
	public Profile updateProfile(@PathVariable("oid") UUID oid, @RequestBody Profile profile) {
		ProfilePrimaryKey keyVal = new ProfilePrimaryKey();
		keyVal.setUserUuid(oid);
		profile.setKey(keyVal);
        return profileRepository.save(profile);
    }

	/*
	@PostMapping("/profile/me")
	public Profile me() {
        return profileRepository.save(profile);
    }
	*/
}
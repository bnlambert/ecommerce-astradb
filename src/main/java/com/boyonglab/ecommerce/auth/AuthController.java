package com.boyonglab.ecommerce.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

	@Autowired
    private UserRepository userRepository;

	@PostMapping("/api/auth/signup")
	public ResponseEntity<?> createUser(@RequestBody SignupDao userInfo) {
		User oldUser = userRepository.findByKeyEmail(userInfo.getEmail());

		if(oldUser != null) {
		    return ResponseEntity.status(406).body("Email is no longer avaialble error");
		}

		User user = new User(userInfo);
		userRepository.save(user);
        TokenDao token = new TokenDao(user.getUserUuid().toString());
		return ResponseEntity.status(201).body(token);
    }

	@PostMapping("/api/auth/signin")
	public  ResponseEntity<?> signin(@RequestBody LoginDao login) {

        User user =  userRepository.findByKeyEmail(login.getUsername());

		if(user != null) {
		    TokenDao token = new TokenDao(user.getUserUuid().toString());
			return ResponseEntity.status(201).body(token);
		}

		return ResponseEntity.status(401).body("Auth failed");	
    }

	@PostMapping("/api/auth/me")
	public  User me() {

		// return new TokenDao("fdfdfsdfdfsdf");
        User user =  userRepository.findByKeyEmail("test1@test.com");
		
		return user;
    }
}
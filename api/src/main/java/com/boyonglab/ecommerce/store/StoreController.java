package com.boyonglab.ecommerce.store;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.*;

@RestController
public class StoreController {

	@Autowired
    private StoreRepository storeRepository;

	@PostMapping("/api/store")
	public Store createStore(@RequestBody Store store) {
        return storeRepository.save(store);
    }

	@PutMapping("/api/store/{oid}")
	public Store updateStore(@PathVariable("oid") UUID oid, @RequestBody Store store) {
		StorePrimaryKey keyVal = new StorePrimaryKey();
		keyVal.setUserUuid(oid);
		store.setKey(keyVal);
        return storeRepository.save(store);
    }
}
package com.boyonglab.ecommerce.tag;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.*;

@RestController
public class TagController {

	@Autowired
    private TagRepository tagRepository;

	@PostMapping("/api/tag")
	public Tag createTag(@RequestBody Tag tag) {
        return tagRepository.save(tag);
    }

	@PutMapping("/api/tag/{oid}")
	public Tag updateTag(@PathVariable("oid") UUID oid, @RequestBody Tag tag) {
		TagPrimaryKey keyVal = new TagPrimaryKey();
		keyVal.setId(oid);
		tag.setKey(keyVal);
        return tagRepository.save(tag);
    }
}
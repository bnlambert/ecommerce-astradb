package com.boyonglab.ecommerce.category;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.*;

@RestController
public class CategoryController {

	@Autowired
    private CategoryRepository categoryRepository;

	@GetMapping("/api/categories")
	public List<Category> itemList() {
        return categoryRepository.findAll();
    }

	@PostMapping("/api/categories")
	public Category createItem(@RequestBody Category category) {
		UUID id = category.getKey().getId();

		if(id == null ) {
			category.getKey().setId(UUID.randomUUID());
		}
        return categoryRepository.save(category);
    }

	@PutMapping("/api/categories/{id}")
	public Category updateItem(@PathVariable("id") UUID id, @RequestBody Category category) {
		CategoryPrimaryKey keyVal = new CategoryPrimaryKey();
		keyVal.setId(id);
		category.setKey(keyVal);
        return categoryRepository.save(category);
    }

	@DeleteMapping("/api/categories/{id}")
	public String deleteItem(@PathVariable("id") UUID id) {
        categoryRepository.deleteByKeyId(id);
		return "";
    }
}
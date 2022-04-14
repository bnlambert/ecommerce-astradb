package com.boyonglab.ecommerce.product;

import java.util.UUID;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.web.bind.annotation.*;

@RestController
public class ProductController {

	@Autowired
    private ProductRepository productRepository;

	@GetMapping("/api/products")
	public List<Product> itemList() {
        return productRepository.findAll();
    }

	@PostMapping("/api/products")
	public Product createItem(@RequestBody Product product) {
        return productRepository.save(product);
    }

	@PutMapping("/api/products/{id}")
	public Product updateItem(@PathVariable("id") UUID id, @RequestBody Product product) {
		ProductPrimaryKey keyVal = new ProductPrimaryKey();
		keyVal.setId(id);
		product.setKey(keyVal);
        return productRepository.save(product);
    }

	@DeleteMapping("/api/products/{id}")
	public String deleteItem(@PathVariable("id") UUID id) {
        productRepository.deleteByKeyId(id);
		return "";
    }
}
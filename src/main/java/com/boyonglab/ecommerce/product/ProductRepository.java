package com.boyonglab.ecommerce.product;

import java.util.UUID;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

@Repository
@RestResource(exported = false)
public interface ProductRepository extends CassandraRepository<Product, ProductPrimaryKey> {
   Product findByKeyId(UUID id);

   void deleteByKeyId(UUID id);

}


package com.boyonglab.ecommerce.category;

import java.util.List;
import java.util.UUID;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

@Repository
@RestResource(exported = false)
public interface CategoryRepository extends CassandraRepository<Category, CategoryPrimaryKey> {
   List<Category> findAllByParentId(UUID id);
   Category findByKeyId(UUID id);
   void deleteByKeyId(UUID id);
}


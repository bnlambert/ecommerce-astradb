package com.boyonglab.ecommerce.store;

import java.util.UUID;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

@Repository
@RestResource(exported = false)
public interface StoreRepository extends CassandraRepository<Store, StorePrimaryKey> {
   Store findByKeyUserUuid(UUID id);

}


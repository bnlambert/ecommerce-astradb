package com.boyonglab.ecommerce.profile;

import java.util.UUID;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

@Repository
@RestResource(exported = false)
public interface ProfileRepository extends CassandraRepository<Profile, ProfilePrimaryKey> {
   Profile findByKeyUserUuid(UUID userUuid);

}


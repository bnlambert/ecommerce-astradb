package com.boyonglab.ecommerce.auth;

import org.springframework.data.cassandra.repository.CassandraRepository;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.stereotype.Repository;

// import java.util.List;
// import java.util.UUID;

@Repository
@RestResource(exported = false)
public interface UserRepository extends CassandraRepository<User, UserPrimaryKey> {
   User findByKeyEmail(String email);

  // DELETE

  // void deleteByKeyUserId(UUID userId);

  // void deleteByKeyUserIdAndKeyProductId(UUID userId, UUID productId);

  // FIND (all projected)

  // ProductNameAndPrice findByKeyUserIdAndKeyProductId(UUID userId, UUID productId);

  // List<ProductNameAndPrice> findByKeyUserId(UUID userId);

  // List<ProductNameAndPrice> findAllProjectedBy();
}


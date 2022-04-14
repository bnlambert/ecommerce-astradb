package com.boyonglab.ecommerce.auth;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.cassandra.core.cql.PrimaryKeyType;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyClass;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyColumn;

import java.io.Serializable;

@PrimaryKeyClass
@Data
@Setter
@Getter
public class UserPrimaryKey implements Serializable {

    // @PrimaryKeyColumn(name = "user_uuid", ordinal = 0, type = PrimaryKeyType.PARTITIONED)
    // private UUID userUuid;

    @PrimaryKeyColumn(name = "email", ordinal = 0, type = PrimaryKeyType.PARTITIONED)
    private String email;

    public void setEmail(String email) {
        this.email = email;
    }
}

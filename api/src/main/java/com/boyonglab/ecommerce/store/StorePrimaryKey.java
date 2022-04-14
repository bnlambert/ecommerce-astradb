package com.boyonglab.ecommerce.store;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.cassandra.core.cql.PrimaryKeyType;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyClass;
import org.springframework.data.cassandra.core.mapping.PrimaryKeyColumn;

import java.io.Serializable;
import java.util.UUID;

@PrimaryKeyClass
@Data
@Setter
@Getter
public class StorePrimaryKey implements Serializable {

    @PrimaryKeyColumn(name = "user_uuid", ordinal = 0, type = PrimaryKeyType.PARTITIONED)
    private UUID userUuid;

    public void setUserUuid(UUID id) {
        this.userUuid = id;
    }
}

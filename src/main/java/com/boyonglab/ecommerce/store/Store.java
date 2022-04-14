package  com.boyonglab.ecommerce.store;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.cassandra.core.mapping.*;

import java.io.Serializable;
import java.util.UUID;

@Table(value = "stores_by_user_uuid")
@Data
@Getter
@Setter
public class Store implements Serializable {
    
    @PrimaryKey
    private StorePrimaryKey key;

    @Column("id")
    @CassandraType(type = CassandraType.Name.UUID)
    private UUID id;

    @Column("name")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String name;

    @Column("description")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String description;

    @Column("logo")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String logo;

    Store() {
        if (key == null) {
            StorePrimaryKey newKey = new StorePrimaryKey();
            newKey.setUserUuid(UUID.randomUUID());
            key = newKey;
        }
    }
    
    public StorePrimaryKey getKey() {
        return key;
    }

    public void setKey(StorePrimaryKey val) {
        key = val;
    }
}

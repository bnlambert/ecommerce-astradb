package  com.boyonglab.ecommerce.tag;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.cassandra.core.mapping.*;

import java.io.Serializable;
import java.util.UUID;

@Table(value = "tags")
@Data
@Getter
@Setter
public class Tag implements Serializable {
    
    @PrimaryKey
    private TagPrimaryKey key;

    @Column("name")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String name;

    Tag() {
        if (key == null) {
            TagPrimaryKey newKey = new TagPrimaryKey();
            newKey.setId(UUID.randomUUID());
            key = newKey;
        }
    }
    
    public TagPrimaryKey getKey() {
        return key;
    }

    public void setKey(TagPrimaryKey val) {
        key = val;
    }
}

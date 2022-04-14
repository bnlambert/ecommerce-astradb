package  com.boyonglab.ecommerce.category;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.cassandra.core.mapping.*;

import java.io.Serializable;
import java.util.UUID;
import java.util.List;

@Table(value = "product_categories")
@Data
@AllArgsConstructor
@Builder
public class Category implements Serializable {
    
    @PrimaryKey
    private CategoryPrimaryKey key;

    @Indexed
    @Column("parent_id")
    @CassandraType(type = CassandraType.Name.UUID)
    private UUID parentId;

    @Column("name")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String name;
    
    @Column("description")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String description;

    @Column("thumbnail")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String thumbnail;

    @Column("product_ids")
    @CassandraType(type = CassandraType.Name.LIST, typeArguments =  CassandraType.Name.UUID)
    private List<UUID> productIds;

    public CategoryPrimaryKey getKey() {
        return key;
    }

    public void setKey(CategoryPrimaryKey val) {
        key = val;
    }

    public UUID getParentId() {
        return parentId;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getThumbnail() {
        return thumbnail;
    }

    public List<UUID> getProductIds() {
        return productIds;
    }
}

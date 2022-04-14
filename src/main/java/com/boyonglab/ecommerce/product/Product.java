package  com.boyonglab.ecommerce.product;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import org.springframework.data.cassandra.core.mapping.*;

import java.io.Serializable;
import java.util.List;
import java.util.UUID;

@Table(value = "products")
@Data
@AllArgsConstructor
@Builder
public class Product implements Serializable {
    
    @PrimaryKey
    private ProductPrimaryKey key;

    @Column("name")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String name;
    
    @Column("description")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String description;

    @Column("brand")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String brand;

    @Column("main_image")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String mainImage;

    @Column("other_image")
    @CassandraType(type = CassandraType.Name.LIST, typeArguments =  CassandraType.Name.TEXT)
    private List<String> otherImages;

    @Column("tags")
    @CassandraType(type = CassandraType.Name.LIST, typeArguments =  CassandraType.Name.TEXT)
    private List<String> tags;

    @Column("options")
    @CassandraType(type = CassandraType.Name.LIST, typeArguments =  CassandraType.Name.TEXT)
    private List<String> options;


    Product() {
        if (key == null) {
            ProductPrimaryKey newKey = new ProductPrimaryKey();
            newKey.setId(UUID.randomUUID());
            key = newKey;
        }
    }

    public ProductPrimaryKey getKey() {
        return key;
    }

    public void setKey(ProductPrimaryKey val) {
        key = val;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public String getBrand() {
        return brand;
    }

    public String getMainImage() {
        return mainImage;
    }

    public List<String> getOtherImages() {
        return otherImages;
    }

    public List<String> getTags() {
        return tags;
    }

    public List<String> getOptions() {
        return options;
    }
}

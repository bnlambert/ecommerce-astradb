package  com.boyonglab.ecommerce.profile;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.cassandra.core.mapping.*;

import java.io.Serializable;

@Table(value = "user_profiles")
@Data
@Getter
@Setter
public class Profile implements Serializable {
    
    @PrimaryKey
    private ProfilePrimaryKey key;

    @Column("first_name")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String firstName;

    @Column("last_name")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String lastName;
    
    @Column("phone")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String phone;

    @Column("address")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String address;

    @Column("delivery_address")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String deliveryAddress;

    @Column("country")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String country;

    @Column("geo_address")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String geoAddress;

    @Column("gender")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String gender;

    @Column("state")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String state;

    @Column("birth_date")
    @CassandraType(type = CassandraType.Name.DATE)
    private String birthDate;

    public ProfilePrimaryKey getKey() {
        return key;
    }

    public void setKey(ProfilePrimaryKey val) {
        key = val;
    }
}

package  com.boyonglab.ecommerce.auth;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.cassandra.core.mapping.*;

import java.io.Serializable;  
import java.time.Instant;
import java.util.UUID;

@Table(value = "users")
@Data
@Setter
@Getter
public class User implements Serializable {
 
    User() {

    }

    User(SignupDao userInfo) {
        UserPrimaryKey userPK = new UserPrimaryKey();
        userPK.setEmail(userInfo.getEmail());
        
        this.key = userPK;
        this.type = userInfo.getType();
        this.password = userInfo.getPassword();
        this.status = 1;
        this.userUuid = UUID.randomUUID();
        this.createdAt = Instant.now();
        this.updatedAt = Instant.now();
       
    }

    @PrimaryKey
    private UserPrimaryKey key;

    @Column("user_uuid")
    @CassandraType(type = CassandraType.Name.UUID)
    private UUID userUuid;

    @Column("password")
    @CassandraType(type = CassandraType.Name.TEXT)
    private String password;

    @Column("status")
    @CassandraType(type = CassandraType.Name.INT)
    private Integer status;

    @Column("type")
    @CassandraType(type = CassandraType.Name.INT)
    private Integer type;

    @CassandraType(type = CassandraType.Name.TIMESTAMP)
    @Column("created_at")
    private Instant createdAt;

    @CassandraType(type = CassandraType.Name.TIMESTAMP)
    @Column("updated_at")
    private Instant updatedAt;

    public UserPrimaryKey getKey() {
        return key;
    }

    public UUID getUserUuid() {
        return userUuid;
    }

}

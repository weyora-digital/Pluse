package me.pluse.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import jakarta.annotation.Generated;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Document(collation = "user")
@Getter
@Setter
public class User {

    @Id
    private String id;

    @Field("name")
    private String name;

    @Field("email")
    @Indexed(unique = true)
    private String email;

    @Field("password")
    private String password;

    
}

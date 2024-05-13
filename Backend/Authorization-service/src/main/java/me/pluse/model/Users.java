package me.pluse.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Date;

@Document(collection="users")
@Data
@NoArgsConstructor
public class Users {
    @Id
    private String id;

    @NotNull
    @Field(name = "Fullname")
    private String fullname;

    @NotNull
    @Field(name = "Username")
    private String username;

    @Field(name = "Password")
    // serializing object into Json, the fields that are tagged with @JsonIgnore will not be included in the serialized Json object.
    @JsonIgnore
    private String password;

    @NotNull
    @Field(name = "isAdminUser")
    private String isAdmin;

    @NotNull
    @Field(name = "Timestamp")
    private Date timestamp = new Date();

    @NotNull
    @Field
    private Date createdOn;

    @NotNull
    @Field(name = "isOauthAccount")
    private String isOauthAccount = "N";

    @Field(name = "deletedFlag")
    private String deletedFlag;

    @Field(name = "phoneNo")
    private long phoneNo;

    @Field(name = "credentialsExpiryDate")
    private LocalDateTime credentialsExpiryDate;

    @Field(name = "isAccountExpired")
    private boolean isAccountExpired;

    @Field(name = "isAccountLocked")
    private boolean isAccountLocked;

    @Field(name = "isReadOnlyUser")
    private boolean isReadOnlyUser;

    @Field(name = "Bio")
    private String Bio;


    @Override
    public String toString()
    {
        if(isAdmin!=null && isAdmin.equalsIgnoreCase("Y")) {
            return "User [id=" + id + ", uname=" + username + ", Admin User]";
        } else {
            return "User [id=" + id + ", uname=" + username + "]";
        }
    }
}

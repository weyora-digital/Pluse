package me.pluse.mediaservice.model;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.Date;

@Data
@Getter
@Setter
@Document(collection = "media")
public class Media {
    @Id
    private String id;

    @Field("contentType")
    private String contentType;

    @Field("uploadDate")
    private Date uploadDate = new Date();

    @Field("data")
    private byte[] data;

}

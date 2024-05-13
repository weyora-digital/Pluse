package me.pluse.mediaservice.dto;

import lombok.Data;
import me.pluse.mediaservice.model.Media;

@Data
public class MediaResponse {
    String id;

    public MediaResponse(Media media){
        this.id = media.getId();
    }
}

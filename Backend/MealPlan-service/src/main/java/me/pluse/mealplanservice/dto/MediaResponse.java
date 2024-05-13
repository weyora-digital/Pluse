package me.pluse.mealplanservice.dto;

import com.thoughtworks.xstream.annotations.XStreamInclude;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MediaResponse {

    String id;
}

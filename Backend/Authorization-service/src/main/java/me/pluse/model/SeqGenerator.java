package me.pluse.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "sequence_generator")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SeqGenerator {

    @Id
    private int seqNo;
    private String type;
}

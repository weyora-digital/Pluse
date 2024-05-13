package me.pluse.mediaservice.repository;

import me.pluse.mediaservice.model.Media;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MediaRepository extends MongoRepository<Media, String> {
}

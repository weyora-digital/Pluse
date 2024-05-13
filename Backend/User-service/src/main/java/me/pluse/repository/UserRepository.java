package me.pluse.repository;


import org.springframework.data.mongodb.repository.MongoRepository;
import me.pluse.model.User;

public interface UserRepository extends MongoRepository<User, String>{
    

    
}
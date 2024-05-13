package me.pluse.services.redis;

import me.pluse.repository.redis.TokensRedisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TokensRedisService {

    @Autowired
    private TokensRedisRepository tokensRedisRepository;

    public TokensEntity save(TokensEntity entity) {
        return tokensRedisRepository.save(entity);
    }


    public Optional<TokensEntity> findById(String id) {
        return tokensRedisRepository.findById(id);
    }

    public Iterable<TokensEntity> findAll() {
        return tokensRedisRepository.findAll();
    }
}

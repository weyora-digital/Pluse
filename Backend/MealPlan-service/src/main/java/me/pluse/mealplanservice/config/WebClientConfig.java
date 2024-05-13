package me.pluse.mealplanservice.config;

import io.netty.channel.ChannelOption;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.client.reactive.ReactorClientHttpConnector;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.netty.http.client.HttpClient;

import java.time.Duration;

@Configuration
public class WebClientConfig {

//    @Bean
//    @LoadBalanced
//    public WebClient.Builder webClientBuilder() {
//        return WebClient.builder()
//                .clientConnector(new ReactorClientHttpConnector(
//                        HttpClient.create()
//                                .option(ChannelOption.CONNECT_TIMEOUT_MILLIS, 2000)
//                                .responseTimeout(Duration.ofSeconds(5))
//                ));
//    }

    @Bean
    // add cliend side load balancing to the order-service
    @LoadBalanced
    public WebClient.Builder webClient(){
        return WebClient.builder();
    }
}

package me.pluse.apigateway.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.cors.reactive.CorsConfigurationSource;

import java.util.Arrays;

@Configuration
 @EnableWebSecurity
 @EnableGlobalMethodSecurity(prePostEnabled = true)
 public class SecurityConfig {

     @Bean
     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
         http
                 .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                 .csrf(AbstractHttpConfigurer::disable)
//                 .cors(cors -> cors.and())
                 //                .authorizeHttpRequests(request -> {
                 //                    request.requestMatchers("/api/mealplan/**").permitAll();
                 //                });
                 .authorizeHttpRequests(authorize -> authorize
                         .requestMatchers("/eureka/**", "/auth/login")
                         .permitAll()
                         .anyRequest()
                         .authenticated()
                 )
                 .oauth2ResourceServer((oauth2) -> oauth2.jwt(Customizer.withDefaults()));

         return http.build();
     }


     @Bean
     public org.springframework.web.cors.CorsConfigurationSource corsConfigurationSource() {
         CorsConfiguration configuration = new CorsConfiguration();
         configuration.setAllowedOrigins(Arrays.asList("http://localhost:3000"));
         configuration.setAllowedMethods(Arrays.asList("GET", "POST", "OPTIONS"));
         configuration.setAllowedHeaders(Arrays.asList("*"));
         configuration.setAllowCredentials(true);
         UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
         source.registerCorsConfiguration("/**", configuration);
         return (org.springframework.web.cors.CorsConfigurationSource) source;
     }
 }


//@Configuration
//@EnableWebFluxSecurity
//public class SecurityConfig {
//   @Bean
//   public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity serverHttpSecurity) {
//       serverHttpSecurity
//               .csrf(ServerHttpSecurity.CsrfSpec::disable)
//               .authorizeExchange(exchange -> exchange
//                       .pathMatchers("/eureka/**").permitAll()
//                       .pathMatchers("/auth/**").permitAll()
//                       .anyExchange()
//                       .authenticated())
//               .oauth2ResourceServer((oauth2) -> oauth2
//                       .jwt(Customizer.withDefaults()));
//       return serverHttpSecurity.build();
//   }
//
//}


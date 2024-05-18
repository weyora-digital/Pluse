package me.pluse.apigateway.config;


import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.oauth2.jwt.ReactiveJwtDecoder;
import org.springframework.security.oauth2.jwt.ReactiveJwtDecoders;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.server.SecurityWebFilterChain;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

 @Configuration
 @EnableWebSecurity
 public class SecurityConfig {

     @Bean
     public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
         http
                 .csrf(AbstractHttpConfigurer::disable)
                 .cors(AbstractHttpConfigurer::disable)
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
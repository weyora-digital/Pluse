package me.pluse.security.config;

import me.pluse.security.filters.JWTAuthenticationFilter;
import me.pluse.security.services.ApplicationUserDetailsService;
import me.pluse.services.redis.TokensRedisService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.WebSecurityConfigurer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfiguration;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class WebSecurityConfig{

    @Autowired
    private PasswordEncoder encoder;

    @Autowired
    private ApplicationUserDetailsService applicationUserDetailsService;

    @Autowired
    private TokensRedisService redisService;

    // configuring http security
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception{
        http.csrf((csrf) -> csrf.disable())
                // this is for server side does not maintain the state for the client between request; the client is responsible for sending authentication information with each request.
                .sessionManagement((session) -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilter(new JWTAuthenticationFilter(AuthenticationManager, redisService));
//                .addFilterAfter(new JWTVerifierFilter(redisService), JWTAuthenticationFilter.class)
//                .authorizeRequests()
//                .antMatchers("/api/v1/validateConnection/whitelisted").permitAll()
//                .anyRequest()
//                .authenticated()
//                .httpBasic();
//
        return http.build();
    }

//    @Override
//    protected void configure(HttpSecurity http) throws Exception {
//        http.csrf().disable()
//                // this is for server side does not maintain the state for the client between request; the client is responsible for sending authentication information with each request.
//                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
//                .and()
//                .addFilter(new JWTAuthenticationFilter(authenticationManager(), redisService))
//                .addFilterAfter(new JWTVerifierFilter(redisService), JWTAuthenticationFilter.class)
//                .authorizeRequests()
//                .antMatchers("/api/v1/validateConnection/whitelisted").permitAll()
//                .anyRequest()
//                .authenticated()
//                .and().httpBasic();
//    }


    // configure LDAP authentication
    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(authenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setPasswordEncoder(encoder);
        authenticationProvider.setUserDetailsService(applicationUserDetailsService);

        return authenticationProvider;
    }

}

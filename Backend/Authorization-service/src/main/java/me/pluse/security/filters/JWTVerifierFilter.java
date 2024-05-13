package me.pluse.security.filters;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import me.pluse.utils.Utilities;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
public class JWTVerifierFilter extends OncePerRequestFilter {

    private final TokensRedisService tokensRedisService;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        String bearerToken = httpServletRequest.getHeader(SecurityConstants.HEADER);
        if(!(Utilities.validString(bearerToken) && bearerToken.startsWith(SecurityConstants.PREFIX))) {
            filterChain.doFilter(httpServletRequest, httpServletResponse);
            return;
        }

////        if(!Jwts.parser().isSigned(bearerToken)) {
////            filterChain.doFilter(httpServletRequest, httpServletResponse);
////            return;
////        }

        String authToken = bearerToken.replace(SecurityConstants.PREFIX, "");

//        Optional<TokensEntity> tokensEntity = tokensRedisService.findById(authToken);

        if(!tokensEntity.isPresent()) {
            filterChain.doFilter(httpServletRequest, httpServletResponse);
            return;
        }

        String token = tokensEntity.get().getAuthenticationToken();
        Jws<Claims> authClaim = Jwts.parser().setSigningKey(SecurityConstants.KEY)
                .requireIssuer(SecurityConstants.ISSUER)
                .parseClaimsJws(token);

        String username = authClaim.getBody().getSubject();

        List<Map<String, String>> authorities = (List<Map<String, String>>) authClaim.getBody().get("authorities");
        List<GrantedAuthority> grantedAuthorities = authorities.stream().map(map -> new SimpleGrantedAuthority(map.get("authority")))
                .collect(Collectors.toList());
        Authentication authentication = new UsernamePasswordAuthenticationToken(username, null, grantedAuthorities);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        httpServletRequest.setAttribute("username", username);
        httpServletRequest.setAttribute("authorities", grantedAuthorities);
        httpServletRequest.setAttribute("jwt", token);

        filterChain.doFilter(httpServletRequest, httpServletResponse);

    }
}

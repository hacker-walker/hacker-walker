package hacker.framework.common.config;

import hacker.framework.common.annotation.Constants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 11:44
 */
@Component
public class AuthInterceptor implements HandlerInterceptor {
    Logger logger = LoggerFactory.getLogger( AuthInterceptor.class );

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
        logger.info( "AuthInterceptor preHandler {}", request.getRequestURI() );

        Object obj = request.getSession().getAttribute(Constants.AUTH_USER);

        if ( null == obj ) {
            response.setStatus( 401 );
            return false;
        }

        // 操作权限验证TODO???

        return true;
    }
}

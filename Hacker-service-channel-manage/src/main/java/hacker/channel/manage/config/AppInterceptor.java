package hacker.channel.manage.config;

import lombok.extern.slf4j.Slf4j;
import org.apache.shiro.SecurityUtils;
import org.apache.shiro.subject.Subject;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


/**
 * @Description 拦截器
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 11:44
 */
@Slf4j
public class AppInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response,
                             Object handler) throws Exception {
        String url = request.getRequestURL().toString();
        log.info("=== request url: "+url);
//        String username = "123";
//        String password = "123";
//        String slat = "Jhuiabn9_DhiebFIJ==jel%$dafe4fs@deaerf_";
//        password = SHA256.SHA256Encode(password + slat);
        Subject subject = SecurityUtils.getSubject();
//        AuthenticationToken authenticationToken = new UsernamePasswordToken(username, password);
        Object principal = subject.getPrincipal();
        if (null == principal){
            response.sendRedirect("/dr.html");
            log.info("=拦截=重定向=");
            return false;
        }
        log.info("拦截器放行");
        return true;
    }

    @Override
    public void postHandle(HttpServletRequest request, HttpServletResponse response,
                           Object handler, ModelAndView modelAndView) throws Exception {
        System.out.println("拦截器执行后");
    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response,
                                Object handler, Exception ex) throws Exception {
        System.out.println("完成");
    }
}

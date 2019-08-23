package hacker.framework.common.aspect;

import com.alibaba.fastjson.JSON;
import com.google.common.collect.Lists;
import hacker.framework.common.annotation.Limiter;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.springframework.core.io.ClassPathResource;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.script.DefaultRedisScript;
import org.springframework.scripting.support.ResourceScriptSource;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import java.lang.reflect.Method;

@Aspect
@Component
public class LimiterAspect {

    /**
     * LIMIT-KEY 前缀
     */
    private static final String LIMIT_KEY_PREFIX = "limit:key:";

    @Resource
    private StringRedisTemplate stringRedisTemplate;


    /**
     * @param point
     */
    @Around("@annotation(hacker.framework.common.annotation.Limiter)")
    public Object around(ProceedingJoinPoint point) throws Throwable {

        // requestPath
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder.currentRequestAttributes()).getRequest();
        String route = request.getServletPath();

        MethodSignature methodSignature = (MethodSignature) point.getSignature();
        Method method = methodSignature.getMethod();
        Limiter limiter = method.getAnnotation(Limiter.class);

        int limit = limiter.value();
        int expire = limiter.expire();

        // 唯一：登录用户SessionId + 参数
        String sessionId = null; // todo SecurityUtils.getSubject().getSession().getId().toString();
        String user = sessionId + ":" + JSON.toJSONString(point.getArgs());
        String userHash = String.valueOf(user.hashCode());

        //判断登陆次数
        if (!doLimiter(route, userHash, limit, expire)) {
            throw new RuntimeException("操作太过频繁，请勿重复点击！");
        }

        return point.proceed();
    }

    /**
     * 限流Redis-lua实现
     *
     * @param route
     * @param userHash
     * @param limit
     * @param expire
     * @return
     */
    private boolean doLimiter(String route, String userHash, Integer limit, int expire) {

        final String key = LIMIT_KEY_PREFIX + route + ":" + userHash;

        DefaultRedisScript<Long> redisScript = new DefaultRedisScript<>();
        redisScript.setScriptSource(new ResourceScriptSource(new ClassPathResource("lua/rateLimit.lua")));
        redisScript.setResultType(Long.class);

        Object result = stringRedisTemplate.execute(redisScript, Lists.newArrayList(key),
                String.valueOf(limit), String.valueOf(expire));

        if ((long) result == 1) {
            return true;
        }
        return false;
    }

}

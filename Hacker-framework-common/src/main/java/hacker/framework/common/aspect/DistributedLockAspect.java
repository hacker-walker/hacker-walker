package hacker.framework.common.aspect;

import hacker.framework.common.annotation.DistributedLock;
import org.apache.commons.lang3.ArrayUtils;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.reflect.MethodSignature;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.lang.reflect.Method;
import java.util.Random;

/**
 * 分布式🔐
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 11:58
 */
@Aspect
@Component
public class DistributedLockAspect {

    private static final Logger logger = LoggerFactory.getLogger(DistributedLockAspect.class);

    /**
     * 🔐KEY前缀
     */
    private static final String LOCK_KEY_PREFIX = "lock:key:";

    @Autowired
    private LockUtils lockUtils;


    @Around(value = "@annotation(hacker.framework.common.annotation.DistributedLock)")
    public Object around(ProceedingJoinPoint point) throws Throwable {

        MethodSignature methodSignature = (MethodSignature) point.getSignature();
        Method method = methodSignature.getMethod();

        DistributedLock annotation = method.getAnnotation(DistributedLock.class);

        // timeOut
        long timeOut = annotation.value();


        // key
        // sessionId
        Serializable sessionId = null; // TODO SessionUtils.getSessionId();
        // methodName
        String fullMethodName = getFullMethodName(method);
        // hashCode
        int fullMethodNameHashCode = fullMethodName.hashCode();
        // prefix + methodName + sessionId + hashCode
        String key = LOCK_KEY_PREFIX + method.getName() + ":" + sessionId + ":" + fullMethodNameHashCode;


        // randomVal     生成一个随机数：作为当前🔐的val
        long randomNum = new Random().nextInt(1000000000);
        String val = System.currentTimeMillis() + String.valueOf(randomNum);


        try {

            // 获取锁
            boolean getLock = lockUtils.lock(key, val, timeOut);
            logger.debug(getLock ? "获取锁成功！KEY：" + key + " , VAL：" + val : "获取锁失败！KEY：" + key + " , VAL：" + val);

            // 获m取到锁
            if (getLock) {

                // 执行原方法
                Object result = point.proceed();

                return result;
            }

        } catch (Exception ex) {

            throw ex;

        } finally {

            // 释放锁
            boolean releaseLock = lockUtils.releaseLock(key, val);
            logger.debug(releaseLock ? "释放锁成功！KEY：" + key + " , VAL：" + val : "释放锁失败！KEY：" + key + " , VAL：" + val);
        }

        return null;
    }

    /**
     * method的全方法名
     *
     * @param method
     * @return
     */
    private static String getFullMethodName(Method method) {

        String fullMethodName = "";

        String clazzName = method.getDeclaringClass().getName();
        String methodName = method.getName();

        fullMethodName += clazzName;
        fullMethodName += methodName;

        Class<?>[] parameterTypes = method.getParameterTypes();

        if (ArrayUtils.isNotEmpty(parameterTypes)) {

            for (int i = 0; i < parameterTypes.length; i++) {

                fullMethodName += parameterTypes[i].getName();
            }
        }

        return fullMethodName;
    }

}

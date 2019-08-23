package hacker.framework.common.annotation;


import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * 用户级别限流
 *
 * @Description: J X N H
 * @EnglishName LuKe
 * @authod LiuQi
 * @date 2019/6/3 12:37
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Limiter {


    /**
     * 限流次数，配合expire使用      默认：1次/s
     *
     * @return
     */
    int value() default 1;

    /**
     * 限流时间跨度 （单位：秒）      默认：1s
     *
     * @return
     */
    int expire() default 1;
}

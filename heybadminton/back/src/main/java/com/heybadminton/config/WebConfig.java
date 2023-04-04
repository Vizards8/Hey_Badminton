package com.heybadminton.config;

import com.heybadminton.config.interceptor.LoginInterceptor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


//@Configuration
public class WebConfig implements WebMvcConfigurer {

    private LoginInterceptor loginInterceptor;

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        /**
         * 拦截 test 接口，后续实际遇到需要拦截的端口时，再配置为真正的拦截接口
         */
        registry.addInterceptor(loginInterceptor)
                .addPathPatterns("/test");

    }



}

package com.example.demo;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class DispatcherConfig implements WebMvcConfigurer {


  public void configureDefaultServletHandling(org.springframework.web.servlet.config.annotation.DefaultServletHandlerConfigurer configurer) {
    configurer.enable();
  }

  
  @Override
  public void addResourceHandlers(ResourceHandlerRegistry registry) {
    // 이 방법을 사용하면 스프링 부트가 제공하는 정적 리소스 핸들러는 그대로 사용하면서 커스텀 핸들러가 추가된다.
    // url을 지정하여 실제 리소스 경로를 설정 
    // registry.addResourceHandler("/public/**").addResourceLocations("classpath:/public/", "classpath:/static/");// .setCachePeriod(0);
    // registry.addResourceHandler("/**").addResourceLocations("classpath:/public/", "classpath:/static/");// .setCachePeriod(0);
    // registry.addResourceHandler("/**").addResourceLocations("classpath:/public/");// .setCachePeriod(0);
    registry.addResourceHandler("/public/**").addResourceLocations("classpath:/public/");// .setCachePeriod(0);
    //  registry.addResourceHandler("/**").addResourceLocations("classpath:/static/", "classpath:/sveltekit/");// .setCachePeriod(0);
    //  registry.addResourceHandler("/**").addResourceLocations("classpath:/sveltekit/");// .setCachePeriod(0);
  }
  
}

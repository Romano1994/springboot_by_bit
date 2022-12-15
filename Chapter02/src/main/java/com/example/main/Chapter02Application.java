package com.example.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"main.controller", "user.*"})
public class Chapter02Application {

	public static void main(String[] args) {
		SpringApplication.run(Chapter02Application.class, args);
	}

}

/*
 * Spring Boot에서 css, js, img 경로 추가하는 방법
- Spring에서는 xml에서 따로 리스소 경로를 입력해줘야 한다.
  하지만 Spring Boot는 spring-boot-starter-web에서 이러한 작업을 미리 해주기 때문에 설정했기 때문에 바로 사용이 가능하다.
- src/main/resources/static 안에 넣으면 된다.
- static 아래로 리소스 경로가 잡혀있기 때문에 css, js, img의 상대 경로를 추가하면 사용이 가능하다. 
 * */
//
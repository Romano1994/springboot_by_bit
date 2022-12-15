package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@ComponentScan(basePackages = {"com.example", "boardcontroller"})
@SpringBootApplication
public class Chapter012Application {

	public static void main(String[] args) {
		SpringApplication.run(Chapter012Application.class, args);
	}

}

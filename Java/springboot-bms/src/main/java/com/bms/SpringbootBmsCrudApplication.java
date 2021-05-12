package com.bms;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableJpaRepositories(basePackages = "com.bms")
@ComponentScan(basePackages = "com.bms")
public class SpringbootBmsCrudApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBmsCrudApplication.class, args);
	}

}

package main.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
	
	@GetMapping(value = "/helloWorld")
	public String test() {
		return "I'm in the world";
	}
}

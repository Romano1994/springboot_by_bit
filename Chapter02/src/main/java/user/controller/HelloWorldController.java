package user.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
	
	@GetMapping(value = "/api/hello")
	public String test() {
		return "Hello World";
	}
}

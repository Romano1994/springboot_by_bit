package main.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import user.bean.UserDTO;
import user.service.UserService;

import java.util.List;

@Controller
public class MainController {
	@GetMapping(value = "/")
	public String index() {
		return "/index";
	}

}

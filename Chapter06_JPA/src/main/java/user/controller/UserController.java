package user.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import user.bean.UserDTO;
import user.service.UserService;

@Controller
@RequestMapping(value = "user")
public class UserController {
	@Autowired
	private UserService userService;
	
	@GetMapping(value = "/writeForm")
	public String writeForm() {
		return "user/writeForm";
	}
	
	@PostMapping(value = "write")
	@ResponseBody //디스패쳐 서블릿으로 가는걸 막는다
	public void write(@ModelAttribute UserDTO userDTO) {
		userService.write(userDTO); 
	}
	
	@PostMapping(value = "checkId")
	@ResponseBody
	public String checkId(@RequestParam String id) {
		return userService.checkId(id);
	}
	
	@GetMapping(value = "list")
	public String list() {
		return "user/list";
	}
	
	@PostMapping(value = "getUserList")
	@ResponseBody
	public List<UserDTO> getUserList() {
		return userService.getUserList();
	}
	
	@GetMapping(value = "updateForm")
	public String updateForm() {
		return "user/updateForm";
	}
	
	@PostMapping(value = "getUser")
	@ResponseBody
	public Optional<UserDTO> getUser(@RequestParam String id) {
		return userService.getUser(id);
	}
	
	@PostMapping(value = "update")
	@ResponseBody
	public void update(@ModelAttribute UserDTO userDTO) {
		userService.update(userDTO);
	}
	
	@GetMapping(value = "deleteForm")
	public String deleteForm() {
		return "user/deleteForm";
	}
	
	@PostMapping(value = "delete")
	@ResponseBody
	public void delete(@RequestParam String id) {
		userService.delete(id);
	}
	
	@PostMapping(value = "search")
	@ResponseBody
	public Optional<UserDTO> search(@RequestParam String id){
		return userService.search(id);
	}
}

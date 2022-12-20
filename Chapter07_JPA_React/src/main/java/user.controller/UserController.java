package user.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import user.bean.UserDTO;
import user.service.UserService;

@Controller
@RequestMapping(value = "user")
@CrossOrigin("http://localhost:3000")
public class UserController {
	@Autowired
	private UserService userService;
	
	@GetMapping(value = "/writeForm")
	public String writeForm() {
		return "user/writeForm";
	}
	
	@PostMapping(value = "write")
	public void write(@RequestBody UserDTO userDTO) {
		userService.write(userDTO);
	}
	
	@PostMapping(value = "checkId")
	@ResponseBody
	public String checkId(@RequestBody String id){
		System.out.println("id = "+id);
		return userService.checkId(id);
	}
	
	@GetMapping(value = "list")
	public String list() {
		return "user/list";
	}
	
	@RequestMapping(value = "getUserList")
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
	public List<UserDTO> search(@RequestParam Map<String, String> map){ //searchOption, keyword
		return userService.search(map);
	}
}

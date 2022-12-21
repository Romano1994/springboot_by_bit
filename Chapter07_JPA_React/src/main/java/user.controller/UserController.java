package user.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import user.bean.UserDTO;
import user.service.UserService;

import static org.springframework.web.bind.annotation.RequestMethod.*;

@RestController
@RequestMapping(value = "user")
@CrossOrigin(value = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping(path = "/writeForm")
    public String writeForm() {
        return "user/writeForm";
    }

    @PostMapping(path = "write")
    public void write(@RequestBody UserDTO userDTO) {
        userService.write(userDTO);
    }

    @GetMapping(path = "checkId")
    @ResponseBody
    public String checkId(@RequestParam String id) {
        return userService.checkId(id);
    }

    @GetMapping(path = "list")
    public String list() {
        return "user/list";
    }

    @GetMapping(path = "getUser")
    @ResponseBody
    public Optional<UserDTO> getUser(@RequestParam String id) {
        System.out.println(id);
        return userService.getUser(id);
    }

    @RequestMapping(path = "getUserList")
    @ResponseBody
    public List<UserDTO> getUserList() {
        return userService.getUserList();
    }

    @GetMapping(path = "updateForm")
    public String updateForm() {
        return "user/updateForm";
    }

    @PutMapping(path = "update")
    @ResponseBody
    public void update(@RequestBody UserDTO userDTO) {
        userService.update(userDTO);
    }

    @GetMapping(path = "deleteForm")
    public String deleteForm() {
        return "user/deleteForm";
    }

    @DeleteMapping(path = "delete")
    public void delete(@RequestParam String id) {
        userService.delete(id);
    }

    @GetMapping(path = "search")
    @ResponseBody
    public List<UserDTO> search(@RequestParam Map<String, String> map) { //searchOption, keyword
        System.out.println(map.get("searchOption"));
        System.out.println(map.get("keyword"));

        return null;
//        return userService.search(map);
    }
}

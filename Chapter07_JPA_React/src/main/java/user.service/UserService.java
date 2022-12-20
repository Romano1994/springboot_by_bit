package user.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import user.bean.UserDTO;

public interface UserService {

	void write(UserDTO userDTO);

	List<UserDTO> getUserList();

	String checkId(String id);

	Optional<UserDTO> getUser(String id);

	void update(UserDTO userDTO);

	void delete(String id);

	List<UserDTO> search(Map<String,String> map);

}

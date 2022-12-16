package user.service;

import java.util.List;

import user.bean.UserDTO;

public interface UserService {

	void write(UserDTO userDTO);

	List<UserDTO> getUserList();

	String checkId(String id);

	UserDTO getUser(String id);

	int update(UserDTO userDTO);

	void delete(String id);



}

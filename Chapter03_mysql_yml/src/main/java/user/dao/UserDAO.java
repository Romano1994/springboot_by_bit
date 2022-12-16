package user.dao;

import java.util.List;

import user.bean.UserDTO;

public interface UserDAO {

	List<UserDTO> getUserList = null;

	void write(UserDTO userDTO);

	List<UserDTO> getUserList();

	UserDTO checkId(String id);

	UserDTO getUser(String id);

	int update(UserDTO userDTO);

	void delete(String id);

}

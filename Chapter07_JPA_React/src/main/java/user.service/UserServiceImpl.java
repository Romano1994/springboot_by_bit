package user.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import user.bean.UserDTO;
import user.dao.UserDAO;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserDAO userDAO;
	@Override
	public void write(UserDTO userDTO) {
		//id 컬럼 primary key로 설정되어 있기 때문에 똑같은 아이디가 없으면 insert가 수행되고 있으면 update로 수행된다
		userDAO.save(userDTO);
	}
	
	@Override
	public List<UserDTO> getUserList() {
		return userDAO.findAll();
	}

	@Override
	public String checkId(String id) {
		Optional<UserDTO> userDTO = userDAO.findById(id);
		if(userDTO.isPresent()) {
			return "exist";
		} else {
			return "non_exist"; 
		}
	}

	@Override
	public Optional<UserDTO> getUser(String id) {
		Optional<UserDTO> userDTO = userDAO.findById(id);
		return userDTO;
	}

	@Override
	public void update(UserDTO userDTO) {
		userDAO.save(userDTO);
	}

	@Override
	public void delete(String id) {
		userDAO.deleteById(id);
	}

	
	//첫번째 - 쿼리 메소드
//	@Override
//	public List<UserDTO> search(Map<String, String> map) {
//		String searchOption = map.get("searchOption");
//		String keyword = map.get("keyword");
//		
//		if(searchOption.equals("name")) {
//			return userDAO.findByNameContaining(keyword);
//		} else {
//			return userDAO.findByIdContaining(keyword);
//		}
//	}
	
	//두번째 - @Query 어노테이션
	public List<UserDTO> search(Map<String, String> map){
		String searchOption = map.get("searchOption");
		String keyword = map.get("keyword");
		if(searchOption.equals("name")) {
			return userDAO.getUserSearchName(keyword);
		} else {
			return userDAO.getUserSearchId(keyword);
		}
	}
	

}

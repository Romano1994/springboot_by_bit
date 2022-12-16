package user.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import user.bean.UserDTO;

@Repository
@Transactional
public class UserDAOMyBatis implements UserDAO {
	@Autowired
	private SqlSession sqlSession;
	
	public void write(UserDTO userDTO) {
		int su = sqlSession.insert("userSQL.write", userDTO);
		if(su == 1) {
			System.out.println("저장");
		} else if(su == 0) {
			System.out.println("실패");
		}
	}

	@Override
	public List<UserDTO> getUserList() {
		return sqlSession.selectList("userSQL.getUserList");
	}

	@Override
	public UserDTO checkId(String id) {
		return sqlSession.selectOne("userSQL.checkId", id);
	}

	@Override
	public UserDTO getUser(String id) {
		return sqlSession.selectOne("userSQL.checkId", id);
	}

	@Override
	public int update(UserDTO userDTO) {
		return sqlSession.update("userSQL.update", userDTO);
	}

	@Override
	public void delete(String id) {
		sqlSession.delete("userSQL.delete", id);
	}
}

package com.springboot.main;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	private BoardDAO boardDAO;
	
	@Override
	public void write() {
		BoardDTO boardDTO = new BoardDTO();
		boardDTO.setId("hong");
		boardDTO.setNameString("홍길동");
		boardDTO.setSubject("신출귀몰");
		boardDTO.setContent("불쌍한 사람들을 돕는 의적");
		
		boardDAO.save(boardDTO);
		
		BoardDTO boardDTO2 = new BoardDTO();
		boardDTO2.setId("neo");
		boardDTO2.setNameString("네오");
		boardDTO2.setSubject("네오의 남자친구");
		boardDTO2.setContent("네오의 남자친구는 프로도");
		
		boardDAO.save(boardDTO2);
	}

	@Override
	public List<BoardDTO> getBoardList() {
		List<BoardDTO> list = boardDAO.findAll();
 		
		return list;
	}

}

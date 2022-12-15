package board.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;

import board.bean.BoardDTO;

public class BoardController {
	public BoardController() {
		System.out.println("BoardController 기본 생성자");
	}

	@GetMapping(value = "/board/hello")
	public String hello(String name) {
		return "안녕하세요" + name + "님";
	}

	@GetMapping(value = "/board/getBoard")
	public BoardDTO getBoard() {
		BoardDTO boardDTO = new BoardDTO();
		
		boardDTO.setSeq(1);
		boardDTO.setName("허균");
		boardDTO.setSubject("홍길동전");
		boardDTO.setContent("동에 번쩟 서에 번쩍");
		boardDTO.setLogtime(new Date());
		
		return boardDTO;
	}
	
	@GetMapping(value = "/board/getBoardList")
	public List<BoardDTO> getBoardDTO(){
		List<BoardDTO> list = new ArrayList<BoardDTO>();
		
		BoardDTO boardDTO = new BoardDTO();
		boardDTO.setSeq(1);
		boardDTO.setName("허균");
		boardDTO.setSubject("홍길동전");
		boardDTO.setContent("동에 번쩟 서에 번쩍");
		boardDTO.setLogtime(new Date());
		
		boardDTO.setSeq(2);
		boardDTO.setName("김수정");
		boardDTO.setSubject("둘리");
		boardDTO.setContent("고길동 집에서 산다");
		boardDTO.setLogtime(new Date());
		list.add(boardDTO);
		
		return list;
	}
}

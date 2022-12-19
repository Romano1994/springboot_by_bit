package com.springboot.main;


import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity //테이블과 관련이 있다는 것을 알려준다
@Table(name = "board" )
public class BoardDTO {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)// 특정 데이터베이스에 맞게 자동으로 생성하는 방식, 자동으로 시퀀스 테이블이 생성된다
 	@Column(name = "seq")
	private int seq;
	
	@Column(name = "id", nullable = false, unique = true, length = 30)
	private String id;
	
	@Column(name = "name", nullable = false, length = 30)
	private String nameString;
	
	@Column(name = "subject")
	private String subject;
	
	@Column(name = "content")
	private String content;
	
	@Column(name = "logtime")
	private Timestamp logtime;
}

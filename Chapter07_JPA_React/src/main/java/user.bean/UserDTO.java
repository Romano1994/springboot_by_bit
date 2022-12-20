package user.bean;


import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "usertable")
public class UserDTO {
	
	@Column(name="name", nullable = false ,length = 30)
	private	String name;
	
	@Id
	@Column(name="id", nullable = false, length = 30)
	private	String id;
	
	@Column(name="pwd", nullable = false, length = 30)
	private String pwd;
	
}

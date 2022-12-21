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

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
}

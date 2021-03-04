package com.springboot.application.model;
import javax.persistence.*;
@Entity
@Table (name = "login")
public class UserRecord {
	@Id
	@GeneratedValue (strategy = GenerationType.AUTO)
	private int contactid;
	@Column (name="id")
	private Integer id;
	@Column (name="name")
	private String name;
	@Column (name="password")
	private String password;
	@Column (name="role")
	private String role;
	public UserRecord() {
	}
	//Constructor
	public UserRecord(Integer id,String name, String password, String role) {
		super();
		this.id = id;
		this.name = name;
		this.password = password;
		this.role = role;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
}
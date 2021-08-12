package com.techzy.appl.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.techzy.appl.beans.User;


@Repository("userDao")
@EnableTransactionManagement
public class UserDaoImpl implements UserDao{
	
	@PersistenceContext
	private EntityManager em;

	@Override
	@Transactional
	public String createUser(User u) {
		System.out.println("----Dao Layer----" + u);
		em.persist(u);
		return "User Added";
	}

	@Override
	public List<User> getUserList() {
		String sql = "select u from User u";
		List<User> userList = em.createQuery(sql).getResultList();
		return userList;
	}

	@Override
	public User findUserById(int userId) {
		System.out.println("Dao Layer ----");
		return em.find(User.class, userId);
	}

	@Override
	@Transactional
	public String updateUser(int userId, User newUser) {
		User user=em.find(User.class, userId);
		user.setUserEmail(newUser.getUserEmail());
		user.setUserName(newUser.getUserName());
		user.setUserPassword(newUser.getUserPassword());
		user.setUserType(newUser.getUserType());
		em.merge(user);
		System.out.println(user);
		return "User updated";
	}

	@Override
	@Transactional
	public String deleteUser(int userId) {
		User user = em.find(User.class, userId);
		em.remove(user);
		return "Record deleted";
	}

	@Override
	public String findUserTypeById(int userId) {
		User user = em.find(User.class, userId);
		return user.getUserType();
	}

	
	

	

	
	

}

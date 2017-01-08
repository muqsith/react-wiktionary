package com.faiza.wiktionary.dao.impl;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;

import com.faiza.wiktionary.dao.UserDao;
import com.faiza.wiktionary.dao.entities.User;

@Repository
public class UserDaoImpl implements UserDao{

	@PersistenceContext
	private EntityManager em;
	
	public void createUser(User user) {
		em.persist(user);
	}

	@SuppressWarnings("unchecked")
	public User getUser(String email) {
		User user = null;
		Query query = em.createQuery("from User u where u.email = :email");
		query.setParameter("email", email);
		Object o = query.getResultList();
		if (o != null) {
			List<User> userList = (List<User>) o;
			if (!userList.isEmpty()) {
				user = userList.get(0);
			}			
		}
		return user;
	}

}

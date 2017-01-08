package com.faiza.wiktionary;

import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.util.List;
import java.util.Set;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.transaction.annotation.Transactional;

import com.faiza.wiktionary.dao.BookmarksDao;
import com.faiza.wiktionary.dao.UserDao;
import com.faiza.wiktionary.dao.Wiktionary;
import com.faiza.wiktionary.dao.entities.Bookmark;
import com.faiza.wiktionary.dao.entities.User;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "/wiktionary-spring-context-config.xml" })
public class DaoTest {

	private static final Logger LOG = LoggerFactory.getLogger(DaoTest.class);

	@Autowired
	private UserDao userDao;

	@Autowired
	private Wiktionary wiktionary;

	@Autowired
	private BookmarksDao bookmarksDao;

	@Test
	@Transactional
	@Rollback
	public void testCreateUser() {
		User user = new User();
		user.setEmail("testuser@test.com");
		user.setFname("Test");
		user.setLname("User");
		user.setPassword("tester");
		user.setRole("user");
		user.setAnonymous(0);
		userDao.createUser(user);
		LOG.info("Successfully created user");
		assertTrue(true);
	}

	@Test
	public void testGetSortedChars () {
		String sortedChars = wiktionary.getSortedChars("Apple");
		assertNotNull(sortedChars);
	}

	@Test
	public void testGetDefinition () {
		String def = wiktionary.getDefinition("apple");
		System.out.println("Muqsith : "+def);
		assertNotNull(def);
	}

	@Test
	public void testGetAnagrams () {
		Set<String> anagrams = wiktionary.getAnagrams("cat");
		for (String anagram : anagrams) {
			System.out.println(anagram);
		}
		assertTrue(!anagrams.isEmpty());
	}

	@Test
	public void testSearch() {
		Set<String> titles = wiktionary.search("patri");
		for (String title : titles) {
			System.out.println(title);
		}
		assertTrue(!titles.isEmpty());
	}

	@Test
	public void testBookmarksEmptyList () {
		List<String> bookmarks = bookmarksDao.getUserBookmarks("dummy");
		System.out.println("Bookmarks - " + bookmarks.size());
		assertTrue(bookmarks != null);
	}

	@Test
	public void testBookmarksList () {
		List<String> bookmarks = bookmarksDao.getUserBookmarks("muqsithirfan@gmail.com");
		System.out.println("Bookmarks - " + bookmarks.size());
		assertTrue(bookmarks != null);
	}

	@Transactional
	@Test
	@Rollback
	public void addBookmark() {
		Bookmark bookmark = new Bookmark();
		bookmark.setEmail("muqsithirfan@gmail.com");
		bookmark.setTitle("Neptune");
		bookmarksDao.addBookmark(bookmark);
	}
}

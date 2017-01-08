package com.faiza.wiktionary;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Matchers;
import org.mockito.Mockito;
import org.mockito.invocation.InvocationOnMock;
import org.mockito.stubbing.Answer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.faiza.wiktionary.dto.UserDTO;
import com.faiza.wiktionary.service.UserService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "/test-config-rest-service.xml" })
@WebAppConfiguration
public class RestTest {
	
	private static final Logger LOG = LoggerFactory.getLogger(RestTest.class);
	
	@Autowired
	private WebApplicationContext context;

	private MockMvc mockMvc;
	
	@Autowired
	private UserService userService;
	
	@Before
	public void init() {
		Mockito.doAnswer(new Answer<Void>() {
		    public Void answer(InvocationOnMock invocation) {
		        Object[] args = invocation.getArguments();
		        LOG.info("called with arguments: " + args[0].toString());
		        return null;
		      }
		  }).when(userService).createUser(Matchers.any(UserDTO.class));
	}
		
	@Test
	public void testGetDefinition() throws Exception {
		
		mockMvc = MockMvcBuilders
				.webAppContextSetup(context)
				.build();
		
		mockMvc.perform(get("/app/rest/dictionary/definition?title=apple"))
				.andExpect(status().is(200))
			;
	}
	
	@Test
	public void testGetWord() throws Exception {
		
		mockMvc = MockMvcBuilders
				.webAppContextSetup(context)
				.build();
		
		mockMvc.perform(get("/app/rest/dictionary/word?title=apple"))
				.andExpect(status().is(200))
			;
	}
	
	@Test
	public void testUser() throws Exception {
		mockMvc = MockMvcBuilders
				.webAppContextSetup(context)
				.build();
		
		mockMvc.perform(post("/app/rest/dictionary/createuser")
				.content("{\"fname\":\"muqsith\", "
						+ "\"lname\":\"irfan\", "
						+ "\"email\":\"muqsi@irfan.com\", "
						+ "\"password\":\"test\","
						+ "\"role\":\"user\"}")
				.contentType(MediaType.APPLICATION_JSON_VALUE))
				.andExpect(status().isOk())
			;
	}
}

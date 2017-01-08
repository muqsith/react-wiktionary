package com.faiza.wiktionary.security;

import java.util.Base64;
import java.util.Date;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.codec.digest.DigestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.faiza.wiktionary.dto.UserDTO;
import com.faiza.wiktionary.service.UserService;

@RestController
@RequestMapping("/app/rest/login")
public class LoginController {

	private static final Logger LOG = LoggerFactory.getLogger(LoginController.class);

	private static final String JWT_COOKIE = "X-JWT-Token";
	
	@Value("${localhost}")
	private String localhost;

	@Autowired
	private UserService userService;

	@RequestMapping(value="/signin", method=RequestMethod.POST)
	public ResponseEntity<String> login(HttpServletRequest request) {
		ResponseEntity<String> responseEntity = new ResponseEntity<String>("FAILED", HttpStatus.UNAUTHORIZED);
		String header = request.getHeader("Authorization");
		if (header != null && header.startsWith("Basic ")) {
			String basicAuthCreds = header.substring(6);
			String decodedString = new String(Base64.getDecoder().decode(basicAuthCreds.getBytes()));
			String[] creds = decodedString.split(":");
			if (creds != null && creds.length > 1) {
				String email = creds[0];
				String password = creds[1];
				if (!StringUtils.isEmpty(email) && !StringUtils.isEmpty(password)) {
					UserDTO userDto = new UserDTO();
					userDto.setEmail(email);
					userDto.setPassword(password);
					String token = JwtTokenUtil.generateToken(userDto);
					HttpHeaders headers = new HttpHeaders();
					if (!StringUtils.isEmpty(localhost) && localhost.equalsIgnoreCase("true")) {
						headers.add("Set-Cookie", JWT_COOKIE+"="+token+";Max-Age=31536000;");
						headers.add(JWT_COOKIE, token);
					}else {
						headers.add("Set-Cookie", JWT_COOKIE+"="+token+";Max-Age=31536000;path=/app/rest;HttpOnly");
					}
					LOG.info("User "+userDto.getFname()+" "+userDto.getLname()+" is successfully loggedin.");
					responseEntity = new ResponseEntity<String>("SUCCESS", headers, HttpStatus.OK); 
				}
			}
		}
		return responseEntity;
	}

	@RequestMapping(value="/signup", method=RequestMethod.POST)
	public ResponseEntity<String> signup(@RequestBody UserDTO userDto) {
		userService.createUser(userDto);
		return ResponseEntity.ok("SUCCESS");
	}

	@RequestMapping(value="/logout", method=RequestMethod.POST)
	public void logout() {
		UserDTO userDto = (UserDTO) SecurityContextHolder
				.getContext()
				.getAuthentication()
				.getPrincipal();
		LOG.info("User {} {} is successfully logged out", userDto.getFname(), userDto.getLname());
	}
	
	@RequestMapping(value="/create-anoymous-user")
	public UserDTO createAnonymousUser(HttpServletRequest request) {
		UserDTO userDto = new UserDTO();
		String userIp = request.getRemoteAddr();
		String userAgent = request.getHeader("User-Agent");
		String text = userIp+userAgent+(new Date()).getTime();
		String sha256hex = DigestUtils.sha256Hex(text);
		userDto.setEmail(sha256hex+"@dictionary.com");
		userDto.setAnonymous(1);
		userDto.setFname("Anonymous");
		userDto.setLname("User");
		userDto.setPassword("anonymous123");
		userDto.setRole("user");
		userService.createUser(userDto);
		return userDto;
	}
}

package com.study_app.backend.controller;

import org.springframework.web.bind.annotation.RestController;

import com.study_app.backend.model.dto.UserRegister;
import com.study_app.backend.service.UserService;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping("/")
  public String getHello() {
      return "Hello";
  }

  @GetMapping("/signin")
  public String getUser(@RequestParam String username, @RequestParam String password) {
      return username;
  }

  @GetMapping("/signup")
  public String setUser(UserRegister userRegister) throws Exception {
      return userService.register(userRegister);
  }
}
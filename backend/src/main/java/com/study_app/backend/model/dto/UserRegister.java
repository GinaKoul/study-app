package com.study_app.backend.model.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserRegister {
    private String username;
    private String password;
    private String confirmpassword;
}

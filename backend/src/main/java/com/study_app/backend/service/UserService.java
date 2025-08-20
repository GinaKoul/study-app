package com.study_app.backend.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.study_app.backend.model.User;
import com.study_app.backend.model.dto.UserRegister;
import com.study_app.backend.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class UserService {

    @Autowired
    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    @Transactional
    public String register(UserRegister userRegister) {
        String username = userRegister.getUsername();
        String password = userRegister.getPassword();
        String confirmpassword = userRegister.getConfirmpassword();

        if (userRepository.existsByUsername(username)) {
            throw new IllegalArgumentException("Username already exists");
        }

        if(! password.equals(confirmpassword)) {
            throw new IllegalArgumentException("Password does not match");
        }

        User user = new User();
        user.setUsername(username);
        user.setPassword(passwordEncoder.encode(password));

        userRepository.save(user);

        return "User registered";
    }

    public User login(String username, String rawPassword) {
        User user = userRepository.findByUsername(username)
                .orElseThrow(() -> new IllegalArgumentException("User not found"));

        if (!passwordEncoder.matches(rawPassword, user.getPassword())) {
            throw new IllegalArgumentException("Invalid password");
        }

        return user;
    }


    public Optional<User> findById(Long id) {
        return userRepository.findById(id);
    }
}

// import org.springframework.stereotype.Service;
// import java.util.List;
// import java.util.ArrayList;
// import java.util.Arrays;
// import java.util.Optional;
// import com.study_app.backend.model.User;

// @Service
// public class UserService {

    // private List<User> userList;

    // public void userService() {
    //     userList = new ArrayList<>();

    //     User user1 = new User("Linnea", "66438hgjd");
    //     User user2 = new User("James", "klhglf728");

    //     userList.addAll(Arrays.asList(user1,user2));
    // }

    // public Optional<User> getUser(Integer id) {
    //     Optional optional = Optional.empty();
    //     for(User user: userList) {
    //         if(id == user.getId()) {
    //             optional = Optional.of(user);
    //             return optional;
    //         }
    //     }
    //     return optional;
    // }
// }

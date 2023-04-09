package com.heybadminton.entity;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
public class User {
    private int id;
    private String username;
    private String email;
    private String password;
    private String isAdmin;
}

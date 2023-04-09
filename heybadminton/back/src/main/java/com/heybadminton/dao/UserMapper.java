package com.heybadminton.dao;

import com.heybadminton.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    List<User> selectAllUsers();

    int insertUser(User user);

    User searchUserByEmail(String email);

    User searchUserByUserNameAndPassword(String username, String password);

}


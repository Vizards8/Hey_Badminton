package com.heybadminton.service;

import com.heybadminton.entity.User;
import com.heybadminton.pojo.ResponseResult;
import com.heybadminton.pojo.UserVO;

public interface UserService {

    public ResponseResult findUserInfoByToken(String token);

    String getTokenByUsername(String username, String password, int isRemembered);

    User findUserExist(String username);

    String generateToken(User user, int isRemembered);
}

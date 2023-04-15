package com.heybadminton.service.impl;

import com.heybadminton.constant.ErrorCode;
import com.heybadminton.dao.UserMapper;
import com.heybadminton.entity.User;
import com.heybadminton.pojo.ResponseResult;
import com.heybadminton.pojo.UserVO;
import com.heybadminton.service.UserService;
import com.heybadminton.utils.JWTUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    UserMapper userMapper;

    @Override
    public ResponseResult findUserInfoByToken(String token) {
        // 1.先判断token是否合法
        // 2. token是否过期
        // 3. token解析出用户信息

        if(JWTUtils.validateToeknExpOrNot(token)) {
            return ResponseResult.fail(ErrorCode.SESSION_TIME_OUT.getCode(), ErrorCode.SESSION_TIME_OUT.getMsg());
        }

        Map<String, Object> claims = JWTUtils.checkToken(token);
        UserVO user = new UserVO();
        user.setUserId((Long) claims.get("userId"));
        user.setUsername((String) claims.get("username"));
        return ResponseResult.success(user);
    }

    @Override
    public String getTokenByUsername(String username, String password, int isRemembered) {
        User user = userMapper.searchUserByUserNameAndPassword(username, password);

        String token = "";
        if(isRemembered == 0) {
            // 30分钟就可
            token = JWTUtils.createToeknWithTimespan((long) user.getId(), user.getUsername(), 30 * 60 * 1000);
        } else {
            // 7天
            token = JWTUtils.createToeknWithTimespan((long) user.getId(), user.getUsername(), 7 * 24 * 60 * 60 * 1000);
        }
        return token;
    }

    @Override
    public User findUserExist(String username) {
        return userMapper.getUserByUserName(username);
    }

    @Override
    public String generateToken(User user, int isRemembered) {
        String token = "";
        if(isRemembered == 0) {
            // 30分钟就可
            token = JWTUtils.createToeknWithTimespan(user.getId(), user.getUsername(), 30 * 60 * 1000);
        } else {
            // 7天
            token = JWTUtils.createToeknWithTimespan(user.getId(), user.getUsername(), 7 * 24 * 60 * 60 * 1000);
        }

        //todo: 把token放到redis中，以后取的时候，先从redis中取。
        return token;
    }
}

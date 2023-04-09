package com.heybadminton.controller;

import com.heybadminton.pojo.ResponseResult;
import com.heybadminton.pojo.UserVO;
import com.heybadminton.service.UserService;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private UserService userService;


    @PostMapping("/login")
    public ResponseResult login(String username, String password, int isRemembered) {
        //1.判断用户名是否存在

        //2.判断用户名跟密码是否匹配

        //3. 根据用户生成token


        // 如果isRemembered == 1, token过期时间为14天；isRemembered == 0的话，token过期时间为30分钟
        String token = userService.getTokenByUsername(username, password, isRemembered);
        return ResponseResult.success(token);
    }

    @PostMapping("/register")
    public ResponseResult register(UserVO user) {

        return null;
    }



}

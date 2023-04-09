package com.heybadminton;

import org.junit.Test;

import java.util.Iterator;
import java.util.Map;

import com.heybadminton.utils.JWTUtils;

public class JwtTest {

    @Test
    public void test() {
        Long id = 1L;
        String tk = JWTUtils.createToekn(id, "will99");
        System.out.println(tk);
        String token = "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODExMTA2MjAsInVzZXJJZCI6MSwiaWF0IjoxNjgxMDI0MjIwLCJ1c2VybmFtZSI6IndpbGw5OSJ9.Jgye-7Y0zuP-LHvkQHDNs19Oji-z-8uh9ZNGajO20ic";
        Map<String, Object> map = JWTUtils.checkToken(token);
        Iterator iter = map.entrySet().iterator();
        while (iter.hasNext()) {
            Map.Entry entry = (Map.Entry) iter.next();
            Object key = entry.getKey();
            Object value = entry.getValue();
            System.out.print(key);
            System.out.print("----");
            System.out.println(value);
        }

    }



}

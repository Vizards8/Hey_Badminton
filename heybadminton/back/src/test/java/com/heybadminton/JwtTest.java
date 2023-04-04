package com.heybadminton;

import org.junit.Test;

import java.util.Iterator;
import java.util.Map;

import com.heybadminton.utils.JWTUtils;

public class JwtTest {

    @Test
    public void test() {
        Long id = 1L;
        String tk = JWTUtils.createToekn(id);
        System.out.println(tk);
        String token = "eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2ODA2ODMzODYsInVzZXJJZCI6MSwiaWF0IjoxNjgwNTk2OTg2fQ.3klOKkJjnMFxjhHtFtuudKoMB7QOpAG-q2u1wLvGGyg";
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

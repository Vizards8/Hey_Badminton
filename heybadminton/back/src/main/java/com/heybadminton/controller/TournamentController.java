package com.heybadminton.controller;

import com.heybadminton.dao.TournamentMapper;
import com.heybadminton.pojo.ResponseResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/tournament")
@CrossOrigin
public class TournamentController {

    @Autowired
    TournamentMapper tournamentMapper;

    @GetMapping("/getAll")
    public ResponseResult getAllTournament() {
        return ResponseResult.success(tournamentMapper.getAllTournament());
    }

}

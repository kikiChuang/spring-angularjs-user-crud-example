package com.andrei.controllers;

import com.andrei.models.User;
import com.andrei.models.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    @Autowired
    private UserDao userDao;

    @RequestMapping(value = "/user", method = RequestMethod.GET)
    public ResponseEntity<?> getUsers(@RequestParam(value = "id", required = false) String id) {
        if (id == null) return new ResponseEntity<>(userDao.findAll(), HttpStatus.OK);
        else return new ResponseEntity<>(userDao.findOne(Long.parseLong(id)), HttpStatus.OK);
    }

    @RequestMapping(value = "/user", method = RequestMethod.POST)
    public ResponseEntity<?> createUser(@RequestBody User user) {
        userDao.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping(value = "/user", method = RequestMethod.PUT)
    public ResponseEntity<?> editUser(@RequestBody User user) {
        userDao.save(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @RequestMapping(value = "/user", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteUser(@RequestParam(value = "id") String id) {
        User user = userDao.findOne(Long.parseLong(id));
        userDao.delete(Long.parseLong(id));
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

}

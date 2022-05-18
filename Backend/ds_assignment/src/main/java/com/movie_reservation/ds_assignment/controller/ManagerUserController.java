package com.movie_reservation.ds_assignment.controller;

import com.movie_reservation.ds_assignment.model.ManagerUser;
import com.movie_reservation.ds_assignment.repository.ManagerUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins="*")
@RequestMapping("/manager")
public class ManagerUserController {

    @Autowired
    ManagerUserRepository managerUserRepository;

    /*
        Method - Create Manager
        By - Isuru Pathum Herath
    */

    @PostMapping("/")
    public ResponseEntity<ManagerUser> createManager(@RequestBody ManagerUser managerUser) {
        try {
            ManagerUser managerList = managerUserRepository.save(new ManagerUser(managerUser.getId(), managerUser.getFirstName(), managerUser.getMiddleName(), managerUser.getLastName(), managerUser.getMobileNumber(), managerUser.getEmail(), managerUser.getDOB(), managerUser.getNIC(), managerUser.getAddress(), "manager", managerUser.getAccountStatus(), managerUser.getProfileURL()));
            return new ResponseEntity<>(managerList, HttpStatus.CREATED);
        } catch (Exception e) {
            System.out.println("Error :- " + e.getMessage());
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
        Method - Get All Manager
        By - Isuru Pathum Herath
    */

    @GetMapping("/")
    public ResponseEntity<List<ManagerUser>> getAllManager(@RequestParam(required = false) String title) {
        try {
            List<ManagerUser> manager = new ArrayList<ManagerUser>();
            if (title == null)
                managerUserRepository.findAll().forEach(manager::add);
            else
                managerUserRepository.findByFirstNameContaining(title).forEach(manager::add);
            if (manager.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(manager, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
        Method - Get Manager by Id
        By - Isuru Pathum Herath
    */

    @GetMapping("/{id}")
    public ResponseEntity<ManagerUser> getManagerById(@PathVariable("id") String id) {
        Optional<ManagerUser> managerUser = managerUserRepository.findById(id);
        if (managerUser.isPresent()) {
            return new ResponseEntity<>(managerUser.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }

    /*
        Method - Update Manager
        By - Isuru Pathum Herath
    */

    @PutMapping("/{id}")
    public ResponseEntity<ManagerUser> updateMovie(@PathVariable("id") String id, @RequestBody ManagerUser managerUser) {
        Optional<ManagerUser> managerData = managerUserRepository.findById(id);
        if (managerData.isPresent()) {
            ManagerUser managerList = managerData.get();
            managerList.setFirstName(managerUser.getFirstName());
            managerList.setMiddleName(managerUser.getMiddleName());
            managerList.setLastName(managerUser.getLastName());
            managerList.setMobileNumber(managerUser.getMobileNumber());
            managerList.setEmail(managerUser.getEmail());
            managerList.setDOB(managerUser.getDOB());
            managerList.setNIC(managerUser.getNIC());
            managerList.setAddress(managerUser.getAddress());
            managerList.setType(managerUser.getType());
            managerList.setAccountStatus(managerUser.getAccountStatus());
            managerList.setProfileURL(managerUser.getProfileURL());
            return new ResponseEntity<>(managerUserRepository.save(managerList), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /*
      Method - Delete Manager by Id
      By - Isuru Pathum Herath
    */

    @DeleteMapping("/{id}")
    public ResponseEntity<HttpStatus> deleteManager(@PathVariable("id") String id) {
        try {
            managerUserRepository.deleteById(id);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
      Method - Delete All Managers
      By - Isuru Pathum Herath
    */

    @DeleteMapping("/")
    public ResponseEntity<HttpStatus> deleteAllManagers() {
        try {
            managerUserRepository.deleteAll();
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*
      Method - Get by Type
      By - Isuru Pathum Herath
    */

    @GetMapping("/type")
    public ResponseEntity<List<ManagerUser>> findByAvailability() {
        try {
            List<ManagerUser> managerUsers = managerUserRepository.findByType("active");
            if (managerUsers.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(managerUsers, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}

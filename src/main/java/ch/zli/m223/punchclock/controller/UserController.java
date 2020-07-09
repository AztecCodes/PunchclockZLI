package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.repository.UserRepository;
import ch.zli.m223.punchclock.domain.ApplicationUser;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @name Mattia Trottmann
 * @date 07.07.2020
 * @desc User Controller
 */


@RestController
@RequestMapping("/users")
public class UserController {

    //Variablen
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    /**
     * Controller des Users
     * @param userRepository
     * @param bCryptPasswordEncoder
     */
    public UserController(UserRepository userRepository,
                          BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    /**
     * Methode zur Registrierung eines Benutzerkontos
     * @param user
     */
    @PostMapping("/sign-up")
    public void signUp(@RequestBody ApplicationUser user) {
        if(userRepository.findByUsername(user.getUsername()) == null) {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            userRepository.save(user);
        }
        else{
            System.out.println("User already exists!");
        }
    }
}
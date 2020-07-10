package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.ApplicationUser;
import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.repository.UserRepository;
import ch.zli.m223.punchclock.service.UserDetailsServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

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
    private final UserDetailsServiceImpl userDetailsService;

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    /**
     * Controller des Users
     * @param userRepository
     * @param bCryptPasswordEncoder
     */
    public UserController(UserRepository userRepository,
                          BCryptPasswordEncoder bCryptPasswordEncoder, UserDetailsServiceImpl userDetailsService) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userDetailsService = userDetailsService;
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

    /**
     * Anfrage zur Löschung eines Benutzerprofils
     * @param id
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable long id) {
        userDetailsService.deleteUser(id);
    }

    /**
     * Lässt Benutzer bearbeiten
     * @param user
     */
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void editUser(@Valid @RequestBody ApplicationUser user) {
        userDetailsService.editUser(user);
    }


}
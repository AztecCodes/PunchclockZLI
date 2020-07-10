package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.ApplicationUser;
import ch.zli.m223.punchclock.repository.UserRepository;
import ch.zli.m223.punchclock.service.UserDetailsServiceImpl;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * @author Mattia Trottmann
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
     * Konstruktor
     *
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
     * @return Gibt alle User zurück
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<ApplicationUser> getAllUsers() {
        return userDetailsService.findAll();
    }


    /**
     * Methode zur Registrierung eines Benutzerkontos
     *
     * @param user
     */
    @PostMapping("/sign-up")
    public void signUp(@RequestBody ApplicationUser user) {

        //Überprüfung ob Benutzer existiert bei Erstellung überprüfen
        if (userRepository.findByUsername(user.getUsername()) == null) {
            user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
            userRepository.save(user);
        } else {
            System.out.println("User already exists!");
        }
    }

    /**
     * Methode zur Änderung des Passworts
     *
     * @param user
     */
    @PutMapping("/change")
    @ResponseStatus(HttpStatus.CREATED)
    public void changePassword(@RequestBody ApplicationUser user) {

        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    /**
     * Anfrage zur Löschung eines Benutzerprofils
     *
     * @param id
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable long id) {
        userDetailsService.deleteUser(id);
    }

    /**
     * Lässt Benutzer bearbeiten
     *
     * @param user
     */
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void editUser(@Valid @RequestBody ApplicationUser user) {
        userDetailsService.editUser(user);
    }


}
package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.repository.UserRepository;
import ch.zli.m223.punchclock.domain.ApplicationUser;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import static java.util.Collections.emptyList;

/**
 * @name Mattia Trottmann
 * @date 07.07.2020
 * @desc UserDetails
 */

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    //Variablen
    private final UserRepository userRepository;

    /**
     * Repository Methode
     * @param applicationUserRepository
     */
    public UserDetailsServiceImpl(UserRepository applicationUserRepository) {
        this.userRepository = applicationUserRepository;
    }

    /**
     * Findet User mittels Benutzername
     * @param username
     * @return Gibt die Benutzerdetails zurück
     * @throws UsernameNotFoundException
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        ApplicationUser applicationUser = userRepository.findByUsername(username);
        if (applicationUser == null) {
            throw new UsernameNotFoundException(username);
        }
        return new User(applicationUser.getUsername(), applicationUser.getPassword(), emptyList());
    }
}
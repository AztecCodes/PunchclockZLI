package ch.zli.m223.punchclock;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * @name Mattia Trottmann
 * @date 07.07.2020
 * @desc App Klasse
 */

@SpringBootApplication
public class PunchclockApplication {

    /**
     * Main-Methode der Applikation
     *
     * @param args
     */
    public static void main(String[] args) {
        SpringApplication.run(PunchclockApplication.class, args);
    }

    /**
     * Verschlüsselungsmethode
     *
     * @return
     */
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

}

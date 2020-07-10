package ch.zli.m223.punchclock.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @author Mattia Trottmann
 * @date 07.07.2020
 * @desc User Klasse Datenbank
 */

@Entity
public class ApplicationUser {

    //Variablen
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;
    private String password;

    /**
     * @return Gibt ID des Users zurück
     */
    public Long getId() {
        return id;
    }

    /**
     * @return Gibt den Benutzernamen zurück
     */
    public String getUsername() {
        return username;
    }

    /**
     * Lässt den Benutzernamen setzen
     *
     * @param username
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * @return Gibt Passwort des Users zurück
     */
    public String getPassword() {
        return password;
    }

    /**
     * Lässt Passwort des Benutzers setzen
     *
     * @param password
     */
    public void setPassword(String password) {
        this.password = password;
    }
}
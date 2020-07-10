package ch.zli.m223.punchclock.domain;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * @author Mattia Trottmann
 * @date 07.07.2020
 * @desc Entry Entity
 */

@Entity
public class Entry {

    //Variablen

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @Column(nullable = false)
    private LocalDateTime checkIn;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @Column(nullable = false)
    private LocalDateTime checkOut;

    /**
     * @return Gibt die ID des Eintrags zurück
     */
    public Long getId() {
        return id;
    }

    /**
     * Setzt die ID des Eintrags
     *
     * @param id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return Gibt CheckIn-Zeit zurück des Eintrags
     */
    public LocalDateTime getCheckIn() {
        return checkIn;
    }

    /**
     * Setzt CheckIn-Zeit des Eintrags des Eintrags
     *
     * @param checkIn
     */
    public void setCheckIn(LocalDateTime checkIn) {
        this.checkIn = checkIn;
    }

    /**
     * @return Gibt CheckOut-Zeit zurück des Eintrags
     */
    public LocalDateTime getCheckOut() {
        return checkOut;
    }

    /**
     * Setzt die CheckOut-Zeit des Eintrags
     *
     * @param checkOut
     */
    public void setCheckOut(LocalDateTime checkOut) {
        this.checkOut = checkOut;
    }
}

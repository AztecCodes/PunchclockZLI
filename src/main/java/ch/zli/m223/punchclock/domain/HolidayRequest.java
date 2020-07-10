package ch.zli.m223.punchclock.domain;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.datatype.jsr310.deser.LocalDateTimeDeserializer;
import com.fasterxml.jackson.datatype.jsr310.ser.LocalDateTimeSerializer;

import javax.persistence.*;
import java.time.LocalDateTime;

/**
 * @name Mattia Trottmann
 * @date 09.07.2020
 * @desc Entität HolidayRequest
 */

@Entity
public class HolidayRequest {

    //Variablen

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String location;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @Column(nullable = false)
    private LocalDateTime checkIn;

    @JsonDeserialize(using = LocalDateTimeDeserializer.class)
    @JsonSerialize(using = LocalDateTimeSerializer.class)
    @Column(nullable = false)
    private LocalDateTime checkOut;

    @Column(nullable = false)
    private boolean paid;

    /**
     * @return Gibt die ID des Antrags zurück
     */
    public Long getId() {
        return id;
    }

    /**
     * Setzt die ID des Antrags
     *
     * @param id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return Gibt Ortschaft des Ferienantrags zurück
     */
    public String getLocation() {
        return location;
    }

    /**
     * Setzt Ortschaft des Ferienantrags
     *
     * @param location
     */
    public void setLocation(String location) {
        this.location = location;
    }

    /**
     * @return Gibt CheckIn-Zeit zurück des Antrags
     */
    public LocalDateTime getCheckIn() {
        return checkIn;
    }

    /**
     * Setzt CheckIn-Zeit des Antrags
     *
     * @param checkIn
     */
    public void setCheckIn(LocalDateTime checkIn) {
        this.checkIn = checkIn;
    }

    /**
     * @return Gibt CheckOut-Zeit zurück des Antrags
     */
    public LocalDateTime getCheckOut() {
        return checkOut;
    }

    /**
     * Setzt die CheckOut-Zeit des Antrags
     *
     * @param checkOut
     */
    public void setCheckOut(LocalDateTime checkOut) {
        this.checkOut = checkOut;
    }

    /**
     * @return Gibt zurück ob Antrag bezahlt oder nicht bezahlt sein soll
     */
    public boolean getPaid() {
        return paid;
    }

    /**
     * Setzt ob Antrag bezahlt oder nicht bezahlt sein soll
     *
     * @param paid
     */
    public void setPaid(boolean paid) {
        this.paid = paid;
    }
}

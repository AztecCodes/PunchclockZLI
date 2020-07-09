package ch.zli.m223.punchclock.domain;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * @name Mattia Trottmann
 * @date 09.07.2020
 * @desc Entität Job
 */

public class Job {

    //Variablen

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String jobTitle;

    @Column(nullable = false)
    private short hourlySalary;

    /**
     * @return Gibt die ID des Eintrags zurück
     */
    public Long getId() {
        return id;
    }

    /**
     * Setzt die ID des Eintrags
     * @param id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return Gibt CheckIn-Zeit zurück des Eintrags
     */
    public String getJobTitle() {
        return jobTitle;
    }

    /**
     * Setzt CheckIn-Zeit des Eintrags des Eintrags
     * @param jobTitle
     */
    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    /**
     * @return Gibt CheckOut-Zeit zurück des Eintrags
     */
    public short getHourlySalary() {
        return hourlySalary;
    }

    /**
     * Setzt die CheckOut-Zeit des Eintrags
     * @param hourlySalary
     */
    public void setCheckOut(short hourlySalary) {
        this.hourlySalary = hourlySalary;
    }
}

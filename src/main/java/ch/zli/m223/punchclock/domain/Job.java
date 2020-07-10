package ch.zli.m223.punchclock.domain;

import javax.persistence.*;

/**
 * @author Mattia Trottmann
 * @date 09.07.2020
 * @desc Entität Job
 */

@Entity
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
     * @return Gibt die ID des Jobs zurück
     */
    public Long getId() {
        return id;
    }

    /**
     * Setzt die ID des Jobs
     *
     * @param id
     */
    public void setId(Long id) {
        this.id = id;
    }

    /**
     * @return Gibt Job-Titel zurück
     */
    public String getJobTitle() {
        return jobTitle;
    }

    /**
     * Setzt Job-Titel
     *
     * @param jobTitle
     */
    public void setJobTitle(String jobTitle) {
        this.jobTitle = jobTitle;
    }

    /**
     * @return Gibt stündlichen Lohn zurück
     */
    public short getHourlySalary() {
        return hourlySalary;
    }

    /**
     * Setzt stündlichen Lohn
     *
     * @param hourlySalary
     */
    public void setCheckOut(short hourlySalary) {
        this.hourlySalary = hourlySalary;
    }
}

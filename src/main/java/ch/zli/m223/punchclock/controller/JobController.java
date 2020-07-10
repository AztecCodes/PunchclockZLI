package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.Job;
import ch.zli.m223.punchclock.service.JobService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * @name Mattia Trottmann
 * @date 09.07.2020
 * @desc Controller für Entität Job
 */

@RestController
@RequestMapping("/jobs")
public class JobController {

    private final JobService jobService;

    /**
     * Konstruktor
     *
     * @param jobService
     */
    public JobController(JobService jobService) {
        this.jobService = jobService;
    }

    /**
     * @return Gibt alle Anfragen zurück
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Job> getAllJobs() {
        return jobService.findAll();
    }

    /**
     * @param job
     * @return Gibt erstelltes Job-Profil zurück
     */
    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public Job createJob(@Valid @RequestBody Job job) {
        return jobService.createJob(job);
    }

    /**
     * Anfrage zur Löschung eines Job-Profils
     *
     * @param id
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteJob(@PathVariable long id) {
        jobService.deleteJob(id);
    }

    /**
     * Lässt Antrag bearbeiten
     *
     * @param job
     */
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void editJob(@Valid @RequestBody Job job) {
        jobService.editJob(job);
    }
}

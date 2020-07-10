package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.HolidayRequest;
import ch.zli.m223.punchclock.domain.Job;
import ch.zli.m223.punchclock.repository.HolidayRequestRepository;
import ch.zli.m223.punchclock.repository.JobRepository;

import java.util.List;

/**
 * @name Mattia Trottmann
 * @date 09.07.2020
 * @desc Service für Job-Klasse
 */

public class JobService {

    //Variablen
    private JobRepository jobRepository;

    /**
     * Repository Methode
     * @param jobRepository
     */
    public JobService(JobRepository jobRepository) {
        this.jobRepository = jobRepository;
    }

    /**
     * @param job
     * @return Gibt erstellten Job zurück
     */
    public Job createJob(Job job) {
        return jobRepository.saveAndFlush(job);
    }

    /**
     * @return Gibt alle Jobs zurück
     */
    public List<Job> findAll() {
        return jobRepository.findAll();
    }

    /**
     * Löscht Job
     * @param id
     */
    public void deleteJob(long id) {
        jobRepository.deleteById(id);
    }

    /**
     * Bearbeitet Job
     * @param job
     */
    public void editJob(Job job) {
        jobRepository.save(job);
    }

}

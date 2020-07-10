package ch.zli.m223.punchclock.repository;

import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.domain.Job;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @name Mattia Trottmann
 * @date 09.07.2020
 * @desc Repository für Job-Klasse
 */

public interface JobRepository extends JpaRepository<Job, Long> {
}

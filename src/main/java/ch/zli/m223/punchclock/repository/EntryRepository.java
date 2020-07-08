package ch.zli.m223.punchclock.repository;


import ch.zli.m223.punchclock.domain.Entry;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @name Mattia Trottmann
 * @date 07.07.2020
 * @desc Repository
 */

public interface EntryRepository extends JpaRepository<Entry, Long> {
}

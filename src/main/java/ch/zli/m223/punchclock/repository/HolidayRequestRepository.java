package ch.zli.m223.punchclock.repository;

import ch.zli.m223.punchclock.domain.HolidayRequest;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @name Mattia Trottmann
 * @date 09.07.2020
 * @desc Repository für Holiday Klasse
 */

public interface HolidayRequestRepository extends JpaRepository<HolidayRequest, Long> {
}

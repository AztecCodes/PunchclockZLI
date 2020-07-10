package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.HolidayRequest;
import ch.zli.m223.punchclock.repository.HolidayRequestRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * @name Mattia Trottmann
 * @date 09.07.2020
 * @desc Service für Holiday Klasse
 */

@Service
public class HolidayRequestService {

    //Variablen
    private HolidayRequestRepository holidayRequestRepository;

    /**
     * Repository Methode
     *
     * @param holidayRequestRepository
     */
    public HolidayRequestService(HolidayRequestRepository holidayRequestRepository) {
        this.holidayRequestRepository = holidayRequestRepository;
    }

    /**
     * @param holidayRequest
     * @return Gibt erstellten Anträge zurück
     */
    public HolidayRequest createHolidayRequest(HolidayRequest holidayRequest) {
        return holidayRequestRepository.saveAndFlush(holidayRequest);
    }

    /**
     * @return Gibt alle Anträge zurück
     */
    public List<HolidayRequest> findAll() {
        return holidayRequestRepository.findAll();
    }

    /**
     * Löscht Eintrag
     *
     * @param id
     */
    public void deleteHolidayRequest(long id) {
        holidayRequestRepository.deleteById(id);
    }

    /**
     * Bearbeitet Eintrag
     *
     * @param holidayRequest
     */
    public void editHolidayRequest(HolidayRequest holidayRequest) {
        holidayRequestRepository.save(holidayRequest);
    }

}

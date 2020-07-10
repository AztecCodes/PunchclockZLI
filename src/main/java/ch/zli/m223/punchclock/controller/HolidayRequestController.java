package ch.zli.m223.punchclock.controller;

import ch.zli.m223.punchclock.domain.HolidayRequest;
import ch.zli.m223.punchclock.service.HolidayRequestService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @name Mattia Trottmann
 * @date 09.07.2020
 * @desc Controller für Entität HolidayRequest
 */

@RestController
@RequestMapping("/holidayrequests")
public class HolidayRequestController {
    private final HolidayRequestService holidayRequestService;

    public HolidayRequestController(HolidayRequestService holidayRequestService) {
        this.holidayRequestService = holidayRequestService;
    }

    /**
     * @return Gibt alle Anfragen zurück
     */
    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<HolidayRequest> getAllHolidayRequests() {
        return holidayRequestService.findAll();
    }

    /**
     * @param holidayRequest
     * @return Gibt erstellten Antrag zurück
     */
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public HolidayRequest createHolidayRequest(@Valid @RequestBody HolidayRequest holidayRequest) {
        return holidayRequestService.createHolidayRequest(holidayRequest);
    }

    /**
     * Anfrage zur Löschung eines Antrag
     * @param id
     */
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteHolidayRequest(@PathVariable long id) {
        holidayRequestService.deleteHolidayRequest(id);
    }

    /**
     * Lässt Antrag bearbeiten
     * @param holidayRequest
     */
    @PutMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    public void editHolidayRequest(@Valid @RequestBody HolidayRequest holidayRequest) {
        holidayRequestService.editHolidayRequest(holidayRequest);
    }
}

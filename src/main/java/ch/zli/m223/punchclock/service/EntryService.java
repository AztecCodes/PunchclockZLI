package ch.zli.m223.punchclock.service;

import ch.zli.m223.punchclock.domain.Entry;
import ch.zli.m223.punchclock.repository.EntryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 *
 * @name Mattia Trottmann
 * @date 07.07.2020
 * @desc EntryService
 */

@Service
public class EntryService {

    //Variablen
    private final EntryRepository entryRepository;

    /**
     * Repository Methode
     * @param entryRepository
     */
    public EntryService(EntryRepository entryRepository) {
        this.entryRepository = entryRepository;
    }

    /**
     * @param entry
     * @return Gibt erstellten Eintrag zurück
     */
    public Entry createEntry(Entry entry) {
        return entryRepository.saveAndFlush(entry);
    }

    /**
     *
     * @return Gibt alle Einträge zurück
     */
    public List<Entry> findAll() {
        return entryRepository.findAll();
    }

    /**
     * Löscht Eintrag
     * @param id
     */
    public void deleteEntry(long id) {
        entryRepository.deleteById(id);
    }

    /**
     * Bearbeitet Eintrag
     * @param entry
     */
    public void editEntry(Entry entry) {
        entryRepository.save(entry);
    }

}

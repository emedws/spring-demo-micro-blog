package mx.emmanuel.microblog.restcontrollers;

import mx.emmanuel.microblog.entities.Entry;
import mx.emmanuel.microblog.services.EntryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/entry")
public class EntryController {
    private EntryService entryService;

    @Autowired
    public EntryController(EntryService entryService) {
        this.entryService = entryService;
    }

    @GetMapping
    public List<Entry> findAll() {
        return entryService.findAll();
    }

    @GetMapping("{id}")
    public Optional<Entry> findById(@PathVariable Integer id) {
        return entryService.findById(id);
    }

    @PostMapping({"", "{id}"})
    public Entry save(@PathVariable(required = false) Integer id, @RequestBody Entry entry) {
        entry.setId(id);
        return entryService.save(entry);
    }

    @DeleteMapping("{id}")
    public void deleteById(@PathVariable Integer id) {
        entryService.deleteById(id);
    }
}

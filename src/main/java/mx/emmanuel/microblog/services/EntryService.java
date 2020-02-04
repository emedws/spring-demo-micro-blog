package mx.emmanuel.microblog.services;

import mx.emmanuel.microblog.entities.Entry;
import mx.emmanuel.microblog.utils.AbstractService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class EntryService extends AbstractService<Entry, Integer> {
    protected EntryService(JpaRepository<Entry, Integer> repository) {
        super(repository);
    }
}

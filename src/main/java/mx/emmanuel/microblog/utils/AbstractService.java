package mx.emmanuel.microblog.utils;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public abstract class AbstractService<T, K> {
    private JpaRepository<T, K> repository;

    protected AbstractService(JpaRepository<T, K> repository) {
        this.repository = repository;
    }

    public List<T> findAll() {
        return repository.findAll();
    }

    public Optional<T> findById(K k) {
        return repository.findById(k);
    }

    public <S extends T> S save(S s) {
        return repository.save(s);
    }

    public void deleteById(K k) {
        repository.deleteById(k);
    }
}

package community.astronaut.visitCounter;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class VisitCounterService {

    private final VisitCounterRepository visitCounterRepository;

    public List<VisitCounter> getAll() {
        return visitCounterRepository.findAll();
    }


    public VisitCounter addVisitCounter(VisitCounter visitCounter) {
        return visitCounterRepository.save(visitCounter);
    }
}

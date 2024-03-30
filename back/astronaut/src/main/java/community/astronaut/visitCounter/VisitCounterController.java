package community.astronaut.visitCounter;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/visitCounters")
@RequiredArgsConstructor
public class VisitCounterController {

    private final VisitCounterService visitCounterService;

    @GetMapping("/all")
    public List<VisitCounter> getAll() {
        return visitCounterService.getAll();
    }

    @PostMapping("/add")
    public VisitCounter addVisitCounter(@RequestBody VisitCounter visitCounter) {
        return visitCounterService.addVisitCounter(visitCounter);
    }
}

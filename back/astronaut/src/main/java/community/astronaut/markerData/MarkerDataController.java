package community.astronaut.markerData;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/markerDatas")
@RequiredArgsConstructor
public class MarkerDataController {

    private final MarkerDataService markerDataService;

    @GetMapping("/all")
    public List<MarkerData> getAll() {
        return markerDataService.getAll();
    }

    @GetMapping("/{id}")
    public MarkerData getMarkerDataById(@PathVariable("id") Long id) {
        return markerDataService.getMarkerDataById(id);
    }


    @PostMapping("/add")
    public MarkerData addMarkerData(@RequestBody MarkerData markerData) {
        return markerDataService.addMarkerData(markerData);
    }
}

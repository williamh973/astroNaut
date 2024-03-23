package community.astronaut.markerData;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MarkerDataService {

    private final MarkerDataRepository markerDataRepository;

    public List<MarkerData> getAll() {
        return markerDataRepository.findAll();
    }


    public MarkerData addMarkerData(MarkerData markerData) {
        return markerDataRepository.save(markerData);
    }

    public MarkerData getMarkerDataById(Long id) {
        return markerDataRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + "not found"));
    }

}

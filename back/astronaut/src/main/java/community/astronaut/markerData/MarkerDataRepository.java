package community.astronaut.markerData;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MarkerDataRepository extends JpaRepository<MarkerData, Long> {
}

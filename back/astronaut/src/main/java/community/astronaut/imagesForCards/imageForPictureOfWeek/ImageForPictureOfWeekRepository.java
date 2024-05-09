package community.astronaut.imagesForCards.imageForPictureOfWeek;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageForPictureOfWeekRepository extends JpaRepository<ImageForPictureOfWeek, Long> {
}

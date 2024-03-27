package community.astronaut.newsCard;

import community.astronaut.markerData.MarkerData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsCardRepository  extends JpaRepository<NewsCard, Long> {
}

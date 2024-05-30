package community.astronaut.interactions.newsCard.newsCardDisliked;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsCardDislikedRepository extends JpaRepository<NewsCardDisliked, Long> {
}

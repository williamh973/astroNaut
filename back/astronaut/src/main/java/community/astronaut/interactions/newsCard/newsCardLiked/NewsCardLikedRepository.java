package community.astronaut.interactions.newsCard.newsCardLiked;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsCardLikedRepository extends JpaRepository<NewsCardLiked, Long> {
}

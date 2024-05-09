package community.astronaut.cards.newsCard;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewsCardRepository  extends JpaRepository<NewsCard, Long> {
}

package community.astronaut.cards.pictureSpecialEventCard;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PictureSpecialEventCardRepository extends JpaRepository<PictureSpecialEventCard, Long> {
}

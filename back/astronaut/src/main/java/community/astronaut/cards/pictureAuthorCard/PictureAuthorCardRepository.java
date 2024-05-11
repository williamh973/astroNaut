package community.astronaut.cards.pictureAuthorCard;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PictureAuthorCardRepository extends JpaRepository<PictureAuthorCard, Long> {
}

package community.astronaut.imagesForCards.imageForPictureAuthor;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageForPictureAuthorRepository extends JpaRepository<ImageForPictureAuthor, Long> {
}

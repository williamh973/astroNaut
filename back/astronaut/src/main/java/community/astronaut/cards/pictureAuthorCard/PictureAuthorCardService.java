package community.astronaut.cards.pictureAuthorCard;

import community.astronaut.cards.pictureAuthorCard.PictureAuthorCard;
import community.astronaut.cards.pictureAuthorCard.PictureAuthorCardRepository;
import community.astronaut.imagesForCards.imageForPictureAuthor.ImageForPictureAuthor;
import community.astronaut.imagesForCards.imageForPictureAuthor.ImageForPictureAuthorRepository;
import community.astronaut.imagesForCards.imageForPictureSpecialEvent.ImageForPictureSpecialEvent;
import community.astronaut.imagesForCards.imageForPictureSpecialEvent.ImageForPictureSpecialEventRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PictureAuthorCardService {

    private final PictureAuthorCardRepository pictureAuthorCardRepository;
    private final ImageForPictureAuthorRepository imageForPictureAuthorRepository;

    public List<PictureAuthorCard> getAll() {
        return pictureAuthorCardRepository.findAll();
    }


    public PictureAuthorCard addPictureAuthorCard(PictureAuthorCard pictureAuthorCard) {
        pictureAuthorCard.setTimestamp(new Date());
        return pictureAuthorCardRepository.save(pictureAuthorCard);
    }

    public PictureAuthorCard getPictureAuthorCardById(Long id) {
        return pictureAuthorCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + "not found"));
    }

    @Transactional
    public PictureAuthorCard deletePictureAuthorCard(Long id) {
        ImageForPictureAuthor imageForPictureAuthor = imageForPictureAuthorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + " not found"));
        imageForPictureAuthorRepository.delete(imageForPictureAuthor);

        PictureAuthorCard pictureAuthorCard = pictureAuthorCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + " not found"));
        pictureAuthorCardRepository.delete(pictureAuthorCard);
        return pictureAuthorCard;
    }
}

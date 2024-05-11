package community.astronaut.cards.pictureOfWeekCard;

import community.astronaut.imagesForCards.imageForPictureOfWeek.ImageForPictureOfWeek;
import community.astronaut.imagesForCards.imageForPictureOfWeek.ImageForPictureOfWeekRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PictureOfWeekCardService {

    private final PictureOfWeekCardRepository pictureOfWeekCardRepository;
    private final ImageForPictureOfWeekRepository imageForPictureOfWeekRepository;

    public List<PictureOfWeekCard> getAll() {
        return pictureOfWeekCardRepository.findAll();
    }


    public PictureOfWeekCard addPictureOfWeekCard(PictureOfWeekCard pictureOfWeekCard) {
        pictureOfWeekCard.setTimestamp(new Date());
        return pictureOfWeekCardRepository.save(pictureOfWeekCard);
    }

    public PictureOfWeekCard getPictureOfWeekCardById(Long id) {
        return pictureOfWeekCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + "not found"));
    }

    @Transactional
    public PictureOfWeekCard deletePictureOfWeekCard(Long id) {
        ImageForPictureOfWeek imageForPictureOfWeek = imageForPictureOfWeekRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + " not found"));
        imageForPictureOfWeekRepository.delete(imageForPictureOfWeek);

        PictureOfWeekCard pictureOfWeekCard = pictureOfWeekCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + " not found"));
        pictureOfWeekCardRepository.delete(pictureOfWeekCard);
        return pictureOfWeekCard;
    }
}

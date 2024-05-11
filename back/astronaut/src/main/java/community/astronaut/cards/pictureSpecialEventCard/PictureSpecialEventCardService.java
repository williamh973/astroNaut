package community.astronaut.cards.pictureSpecialEventCard;


import community.astronaut.cards.pictureOfWeekCard.PictureOfWeekCard;
import community.astronaut.imagesForCards.imageForPictureOfWeek.ImageForPictureOfWeek;
import community.astronaut.imagesForCards.imageForPictureSpecialEvent.ImageForPictureSpecialEvent;
import community.astronaut.imagesForCards.imageForPictureSpecialEvent.ImageForPictureSpecialEventRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PictureSpecialEventCardService {

    private final PictureSpecialEventCardRepository pictureSpecialEventCardRepository;
    private final ImageForPictureSpecialEventRepository imageForPictureSpecialEventRepository;

    public List<PictureSpecialEventCard> getAll() {
        return pictureSpecialEventCardRepository.findAll();
    }


    public PictureSpecialEventCard addPictureSpecialEventCard(PictureSpecialEventCard pictureSpecialEventCard) {
        pictureSpecialEventCard.setTimestamp(new Date());
        return pictureSpecialEventCardRepository.save(pictureSpecialEventCard);
    }

    public PictureSpecialEventCard getPictureSpecialEventCardById(Long id) {
        return pictureSpecialEventCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + "not found"));
    }

    @Transactional
    public PictureSpecialEventCard deletePictureSpecialEventCard(Long id) {
        ImageForPictureSpecialEvent imageForPictureSpecialEvent = imageForPictureSpecialEventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + " not found"));
        imageForPictureSpecialEventRepository.delete(imageForPictureSpecialEvent);

        PictureSpecialEventCard pictureSpecialEventCard = pictureSpecialEventCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + " not found"));
        pictureSpecialEventCardRepository.delete(pictureSpecialEventCard);
        return pictureSpecialEventCard;
    }

}

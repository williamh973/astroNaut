package community.astronaut.cards.pictureSpecialEventCard;


import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PictureSpecialEventCardService {

    private final PictureSpecialEventCardRepository pictureSpecialEventCardRepository;

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



}

package community.astronaut.pictureOfWeekCard;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PictureOfWeekCardService {

    private final PictureOfWeekCardRepository pictureOfWeekCardRepository;

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


}

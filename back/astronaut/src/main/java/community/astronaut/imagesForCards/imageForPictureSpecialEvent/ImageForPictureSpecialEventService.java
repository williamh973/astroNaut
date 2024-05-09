package community.astronaut.imagesForCards.imageForPictureSpecialEvent;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ImageForPictureSpecialEventService {

    private final ImageForPictureSpecialEventRepository imageForPictureSpecialEventRepository;


    public List<ImageForPictureSpecialEvent> getAll() {
        return imageForPictureSpecialEventRepository.findAll();
    }

    public ImageForPictureSpecialEvent getImageForPictureSpecialEventById(Long id) {
        return imageForPictureSpecialEventRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + "not found"));
    }

    public ImageForPictureSpecialEvent addImageForPictureSpecialEvent(ImageForPictureSpecialEvent imageForPictureSpecialEvent) {
        return imageForPictureSpecialEventRepository.save(imageForPictureSpecialEvent);
    }

    public ImageForPictureSpecialEvent updateImageForPictureSpecialEvent(ImageForPictureSpecialEvent imageForPictureSpecialEvent, Long id) {

        ImageForPictureSpecialEvent foundImageForPictureSpecialEvent = getImageForPictureSpecialEventById(id);
        foundImageForPictureSpecialEvent.setSrc(imageForPictureSpecialEvent.getSrc());


        return imageForPictureSpecialEventRepository.save(foundImageForPictureSpecialEvent);

    }

    public void deleteImageForPictureSpecialEvent(Long id) {
        imageForPictureSpecialEventRepository.deleteById(id);
    }



}

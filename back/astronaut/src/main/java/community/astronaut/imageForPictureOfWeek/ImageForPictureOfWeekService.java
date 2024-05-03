package community.astronaut.imageForPictureOfWeek;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ImageForPictureOfWeekService {

    private final ImageForPictureOfWeekRepository imageForPictureOfWeekRepository;


    public List<ImageForPictureOfWeek> getAll() {
        return imageForPictureOfWeekRepository.findAll();
    }

    public ImageForPictureOfWeek getImageForPictureOfWeekById(Long id) {
        return imageForPictureOfWeekRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + "not found"));
    }

    public ImageForPictureOfWeek addImageForPictureOfWeek(ImageForPictureOfWeek imageForPictureOfWeek) {
        return imageForPictureOfWeekRepository.save(imageForPictureOfWeek);
    }

    public ImageForPictureOfWeek updateImageForPictureOfWeek(ImageForPictureOfWeek imageForPictureOfWeek, Long id) {

        ImageForPictureOfWeek foundImageForPictureOfWeek = getImageForPictureOfWeekById(id);
        foundImageForPictureOfWeek.setSrc(imageForPictureOfWeek.getSrc());


        return imageForPictureOfWeekRepository.save(foundImageForPictureOfWeek);

    }

    public void deleteImageForPictureOfWeek(Long id) {
        imageForPictureOfWeekRepository.deleteById(id);
    }



}

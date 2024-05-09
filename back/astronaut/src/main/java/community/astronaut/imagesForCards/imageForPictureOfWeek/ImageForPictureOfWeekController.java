package community.astronaut.imagesForCards.imageForPictureOfWeek;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/imagePictureOfWeekCards")
@RequiredArgsConstructor
public class ImageForPictureOfWeekController {

    private final ImageForPictureOfWeekService imageForPictureOfWeekService;



    @GetMapping("/all")
    public List<ImageForPictureOfWeek> getAll() {
        return imageForPictureOfWeekService.getAll();
    }


    @GetMapping("/{id}")
    public ImageForPictureOfWeek getImageForPictureOfWeekById(@PathVariable("id") Long id) {
        return imageForPictureOfWeekService.getImageForPictureOfWeekById(id);
    }

    @PostMapping("/add")
    public ImageForPictureOfWeek addImageForPictureOfWeek(@RequestBody ImageForPictureOfWeek imageForPictureOfWeek) {
        return imageForPictureOfWeekService.addImageForPictureOfWeek(imageForPictureOfWeek);
    }



    @PutMapping("/update/{id}")
    public ImageForPictureOfWeek updateImageForPictureOfWeek(@RequestBody ImageForPictureOfWeek imageForPictureOfWeek, @PathVariable("id") Long id) {
        return imageForPictureOfWeekService.updateImageForPictureOfWeek(imageForPictureOfWeek, id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteImageForPictureOfWeek(@PathVariable("id") Long id) {
        imageForPictureOfWeekService.deleteImageForPictureOfWeek(id);
    }

}

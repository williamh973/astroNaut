package community.astronaut.imagesForCards.imageForPictureSpecialEvent;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/imagePictureSpecialEventCards")
@RequiredArgsConstructor
public class ImageForPictureSpecialEventController {

    private final ImageForPictureSpecialEventService imageForPictureSpecialEventService;



    @GetMapping("/all")
    public List<ImageForPictureSpecialEvent> getAll() {
        return imageForPictureSpecialEventService.getAll();
    }


    @GetMapping("/{id}")
    public ImageForPictureSpecialEvent getImageForPictureSpecialEventById(@PathVariable("id") Long id) {
        return imageForPictureSpecialEventService.getImageForPictureSpecialEventById(id);
    }

    @PostMapping("/add")
    public ImageForPictureSpecialEvent addImageForPictureSpecialEvent(@RequestBody ImageForPictureSpecialEvent imageForPictureSpecialEvent) {
        return imageForPictureSpecialEventService.addImageForPictureSpecialEvent(imageForPictureSpecialEvent);
    }



    @PutMapping("/update/{id}")
    public ImageForPictureSpecialEvent updateImageForPictureSpecialEvent(@RequestBody ImageForPictureSpecialEvent imageForPictureSpecialEvent, @PathVariable("id") Long id) {
        return imageForPictureSpecialEventService.updateImageForPictureSpecialEvent(imageForPictureSpecialEvent, id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteImageForPictureSpecialEvent(@PathVariable("id") Long id) {
        imageForPictureSpecialEventService.deleteImageForPictureSpecialEvent(id);
    }

}

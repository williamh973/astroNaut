package community.astronaut.imagesForCards.imageForPictureAuthor;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/imagePictureAuthorCards")
@RequiredArgsConstructor
public class ImageForPictureAuthorController {

    private final ImageForPictureAuthorService imageForPictureAuthorService;



    @GetMapping("/all")
    public List<ImageForPictureAuthor> getAll() {
        return imageForPictureAuthorService.getAll();
    }


    @GetMapping("/{id}")
    public ImageForPictureAuthor getImageForPictureAuthorById(@PathVariable("id") Long id) {
        return imageForPictureAuthorService.getImageForPictureAuthorById(id);
    }

    @PostMapping("/add")
    public ImageForPictureAuthor addImageForPictureAuthor(@RequestBody ImageForPictureAuthor imageForPictureAuthor) {
        return imageForPictureAuthorService.addImageForPictureAuthor(imageForPictureAuthor);
    }



    @PutMapping("/update/{id}")
    public ImageForPictureAuthor updateImageForPictureAuthor(@RequestBody ImageForPictureAuthor imageForPictureAuthor, @PathVariable("id") Long id) {
        return imageForPictureAuthorService.updateImageForPictureAuthor(imageForPictureAuthor, id);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteImageForPictureAuthor(@PathVariable("id") Long id) {
        imageForPictureAuthorService.deleteImageForPictureAuthor(id);
    }
}

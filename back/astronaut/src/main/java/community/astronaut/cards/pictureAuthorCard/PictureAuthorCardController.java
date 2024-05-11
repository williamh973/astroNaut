package community.astronaut.cards.pictureAuthorCard;


import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/pictureAuthorCards")
@RequiredArgsConstructor
public class PictureAuthorCardController {

    private final PictureAuthorCardService pictureAuthorCardService;

    @GetMapping("/all")
    public List<PictureAuthorCard> getAll() {
        return pictureAuthorCardService.getAll();
    }

    @GetMapping("/{id}")
    public PictureAuthorCard getPictureAuthorCardById(@PathVariable("id") Long id) {
        return pictureAuthorCardService.getPictureAuthorCardById(id);
    }


    @PostMapping("/add")
    public PictureAuthorCard addPictureAuthorCard(@RequestBody PictureAuthorCard pictureAuthorCard) {
        pictureAuthorCard.setTimestamp(new Date());
        return pictureAuthorCardService.addPictureAuthorCard(pictureAuthorCard);
    }

    @DeleteMapping("delete/{id}")
    public PictureAuthorCard deletePictureAuthorCard(
            @PathVariable("id") Long id
    ) {
        return pictureAuthorCardService.deletePictureAuthorCard(id);
    }

}

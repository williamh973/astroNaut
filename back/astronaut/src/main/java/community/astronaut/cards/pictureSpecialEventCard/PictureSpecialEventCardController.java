package community.astronaut.cards.pictureSpecialEventCard;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/pictureSpecialEventCards")
@RequiredArgsConstructor
public class PictureSpecialEventCardController {
    private final PictureSpecialEventCardService pictureSpecialEventCardService;

    @GetMapping("/all")
    public List<PictureSpecialEventCard> getAll() {
        return pictureSpecialEventCardService.getAll();
    }

    @GetMapping("/{id}")
    public PictureSpecialEventCard getPictureSpecialEventCardById(@PathVariable("id") Long id) {
        return pictureSpecialEventCardService.getPictureSpecialEventCardById(id);
    }


    @PostMapping("/add")
    public PictureSpecialEventCard addPictureSpecialEventCard(@RequestBody PictureSpecialEventCard pictureSpecialEventCard) {
        pictureSpecialEventCard.setTimestamp(new Date());
        return pictureSpecialEventCardService.addPictureSpecialEventCard(pictureSpecialEventCard);
    }


}

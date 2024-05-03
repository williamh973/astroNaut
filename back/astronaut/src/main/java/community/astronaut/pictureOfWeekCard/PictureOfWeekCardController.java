package community.astronaut.pictureOfWeekCard;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/pictureOfWeekCards")
@RequiredArgsConstructor
public class PictureOfWeekCardController {

    private final PictureOfWeekCardService pictureOfWeekCardService;

    @GetMapping("/all")
    public List<PictureOfWeekCard> getAll() {
        return pictureOfWeekCardService.getAll();
    }

    @GetMapping("/{id}")
    public PictureOfWeekCard getPictureOfWeekCardById(@PathVariable("id") Long id) {
        return pictureOfWeekCardService.getPictureOfWeekCardById(id);
    }


    @PostMapping("/add")
    public PictureOfWeekCard addPictureOfWeekCard(@RequestBody PictureOfWeekCard pictureOfWeekCard) {
        pictureOfWeekCard.setTimestamp(new Date());
        return pictureOfWeekCardService.addPictureOfWeekCard(pictureOfWeekCard);
    }


}

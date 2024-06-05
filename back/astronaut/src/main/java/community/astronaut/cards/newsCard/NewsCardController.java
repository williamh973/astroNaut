package community.astronaut.cards.newsCard;

import community.astronaut.interactions.newsCard.newsCardLiked.NewsCardLiked;
import community.astronaut.interactions.newsCard.newsCardLiked.NewsCardLikedRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/newsCards")
@RequiredArgsConstructor
public class NewsCardController {


    private final NewsCardService newsCardService;
    private final NewsCardLikedRepository newsCardLikedRepository;

    @GetMapping("/all")
    public List<NewsCard> getAll() {
        return newsCardService.getAll();
    }

    @GetMapping("/{id}")
    public NewsCard getNewsCardById(@PathVariable("id") Long id) {
        return newsCardService.getNewsCardById(id);
    }


    @PostMapping("/add")
    public NewsCard addNewsCard(@RequestBody NewsCard newsCard, @RequestParam("userAssociatedMail") String mail) {
        newsCard.setTimestamp(new Date());
        return newsCardService.addNewsCard(newsCard, mail);
    }

    @PutMapping("/update/{id}")
    public NewsCard updateNewsCard(@RequestBody NewsCard newsCard, @PathVariable("id") Long id) {
        return newsCardService.updateNewsCard(newsCard, id);
    }

    @DeleteMapping("delete/{id}")
    public NewsCard deleteNewsCard(
            @PathVariable("id") Long cardId
    ) {

        return newsCardService.deleteNewsCard(cardId);
    }
}

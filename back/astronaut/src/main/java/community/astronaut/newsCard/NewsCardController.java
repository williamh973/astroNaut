package community.astronaut.newsCard;

import community.astronaut.newsCard.NewsCard;
import community.astronaut.newsCard.NewsCardService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/newsCards")
@RequiredArgsConstructor
public class NewsCardController {


    private final NewsCardService newsCardService;

    @GetMapping("/all")
    public List<NewsCard> getAll() {
        return newsCardService.getAll();
    }

    @GetMapping("/{id}")
    public NewsCard getNewsCardById(@PathVariable("id") Long id) {
        return newsCardService.getNewsCardById(id);
    }


    @PostMapping("/add")
    public NewsCard addNewsCard(@RequestBody NewsCard newsCard) {
        newsCard.setTimestamp(new Date());
        return newsCardService.addNewsCard(newsCard);
    }
}

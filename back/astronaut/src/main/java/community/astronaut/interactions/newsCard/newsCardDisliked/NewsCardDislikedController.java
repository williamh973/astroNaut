package community.astronaut.interactions.newsCard.newsCardDisliked;

import community.astronaut.cards.newsCard.NewsCard;
import community.astronaut.cards.newsCard.NewsCardRepository;
import community.astronaut.interactions.newsCard.newsCardDisliked.NewsCardDisliked;
import community.astronaut.interactions.newsCard.newsCardDisliked.NewsCardDislikedService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/newsCardDislikedList")
public class NewsCardDislikedController {
    private final NewsCardDislikedService newsCardDislikedService;
    private final NewsCardRepository newsCardRepository;

    @GetMapping("currentUser/all")
    public List<NewsCardDisliked> getCurrentUserNewsCardDislikedList() {
        return newsCardDislikedService.getCurrentUserNewsCardDislikedList();
    }

    @PostMapping("/add/{cardId}")
    public NewsCardDisliked addNewsCardDisliked(@PathVariable Long cardId) {
        return newsCardDislikedService.addNewsCardDisliked(cardId);
    }

    @DeleteMapping("/delete/{cardId}")
    public NewsCardDisliked deleteNewsCardDisliked(@PathVariable Long cardId) {
        return newsCardDislikedService.deleteNewsCardDisliked(cardId);
    }

}


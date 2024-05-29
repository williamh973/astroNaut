package community.astronaut.interactions.newsCardLiked;


import community.astronaut.cards.newsCard.NewsCard;
import community.astronaut.cards.newsCard.NewsCardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/newsCardLikedList")
public class NewsCardLikedController {
    private final NewsCardLikedRepository newsCardLikedRepository;
    private final NewsCardLikedService newsCardLikedService;
    private final NewsCardRepository newsCardRepository;

    @GetMapping("currentUser/all")
    public List<NewsCardLiked> getCurrentUserNewsCardLikedList() {
        return newsCardLikedService.getCurrentUserNewsCardLikedList();
    }

    @PostMapping("/newsCardLikedList/{cardId}")
    public NewsCardLiked addNewsCardLiked(@PathVariable Long cardId) {
        NewsCard newsCard = newsCardRepository.findById(cardId)
                .orElseThrow(() -> new RuntimeException("Card not found"));
        return newsCardLikedService.addNewsCardLiked(cardId);
    }

    @DeleteMapping("/delete/{cardId}")
    public NewsCardLiked deleteNewsCardLiked(@PathVariable Long cardId) {
        return newsCardLikedService.deleteNewsCardLiked(cardId);
    }

}

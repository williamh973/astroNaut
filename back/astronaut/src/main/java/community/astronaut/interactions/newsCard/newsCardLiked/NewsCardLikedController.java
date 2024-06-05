package community.astronaut.interactions.newsCard.newsCardLiked;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/newsCardLikedList")
public class NewsCardLikedController {
    private final NewsCardLikedService newsCardLikedService;

    @GetMapping("currentUser/all")
    public List<NewsCardLiked> getCurrentUserNewsCardLikedList() {
        return newsCardLikedService.getCurrentUserNewsCardLikedList();
    }

    @PostMapping("/add/{cardId}")
    public NewsCardLiked addNewsCardLiked(@PathVariable Long cardId) {
        return newsCardLikedService.addNewsCardLiked(cardId);
    }

    @DeleteMapping("/delete/{cardId}")
    public NewsCardLiked deleteNewsCardLiked(@PathVariable Long cardId) {
        return newsCardLikedService.deleteNewsCardLiked(cardId);
    }

}

package community.astronaut.newsCard;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NewsCardService {
    private final NewsCardRepository newsCardRepository;

    public List<NewsCard> getAll() {
        return newsCardRepository.findAll();
    }


    public NewsCard addNewsCard(NewsCard newsCard) {
        newsCard.setTimestamp(new Date());
        return newsCardRepository.save(newsCard);
    }

    public NewsCard getNewsCardById(Long id) {
        return newsCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + "not found"));
    }


    //        foundNewsCard.setPicturesList(newsCard.getPicturesList());
//        foundNewsCard.setTitle(newsCard.getTitle());
//        foundNewsCard.setMainArticle(newsCard.getMainArticle());
//        foundNewsCard.setOptionalArticleOne(newsCard.getOptionalArticleOne());
//        foundNewsCard.setOptionalArticleTwo(newsCard.getOptionalArticleTwo());
//        foundNewsCard.setOptionalArticleThree(newsCard.getOptionalArticleThree());
//        foundNewsCard.setReadingTime(newsCard.getReadingTime());
    public NewsCard updateNewsCard(NewsCard newsCard, Long id) {
        NewsCard foundNewsCard = getNewsCardById(id);
        foundNewsCard.setLikeCount(newsCard.getLikeCount());
        foundNewsCard.setDislikeCount(newsCard.getDislikeCount());
        return newsCardRepository.save(foundNewsCard);
    }

}

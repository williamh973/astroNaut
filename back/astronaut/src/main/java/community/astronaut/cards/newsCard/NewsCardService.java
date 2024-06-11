package community.astronaut.cards.newsCard;

import community.astronaut.imagesForCards.imageForNews.Picture;
import community.astronaut.imagesForCards.imageForNews.PictureRepository;
import community.astronaut.user.User;
import community.astronaut.user.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class NewsCardService {
    private final NewsCardRepository newsCardRepository;
    private final PictureRepository pictureRepository;
    private final UserRepository userRepository;

    public List<NewsCard> getAll() {
        return newsCardRepository.findAll();
    }


    public NewsCard addNewsCard(NewsCard newsCard, String mail) {
        User user = userRepository.findByEmail(mail)
                .orElseThrow(() -> new RuntimeException(mail + " not found"));

        String role = SecurityContextHolder.getContext().getAuthentication().getAuthorities().toString();

        if (role.equals("[ROLE_ADMIN]")) {
            newsCard.setUser(user);
            newsCard.setTimestamp(new Date());
        }
        return newsCardRepository.save(newsCard);
    }

    public NewsCard getNewsCardById(Long id) {
        return newsCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + "not found"));
    }

    public NewsCard updateNewsCard(NewsCard newsCard, Long id) {
        NewsCard foundNewsCard = getNewsCardById(id);
        foundNewsCard.setTitle(newsCard.getTitle());
        foundNewsCard.setMainArticle(newsCard.getMainArticle());
        foundNewsCard.setLikeCount(newsCard.getLikeCount());
        foundNewsCard.setDislikeCount(newsCard.getDislikeCount());
        return newsCardRepository.save(foundNewsCard);
    }

    @Transactional
    public NewsCard deleteNewsCard(Long id) {
        NewsCard newsCard = newsCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + " not found"));
        newsCardRepository.delete(newsCard);
        
        return newsCard;
    }

}

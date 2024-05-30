package community.astronaut.interactions.newsCard.newsCardLiked;

import community.astronaut.cards.newsCard.NewsCard;
import community.astronaut.cards.newsCard.NewsCardRepository;
import community.astronaut.user.User;
import community.astronaut.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class NewsCardLikedService {
private final UserRepository userRepository;
private final NewsCardRepository newsCardRepository;
private final NewsCardLikedRepository newsCardLikedRepository;

   public List<NewsCardLiked> getCurrentUserNewsCardLikedList() {
       User user = getCurrentUser();
       return new ArrayList<>(user.getNewsCardLikedList());
   }

    public NewsCardLiked addNewsCardLiked(Long cardId) {
        User user = getCurrentUser();

        NewsCard newsCard = newsCardRepository.findById(cardId)
                .orElseThrow(() -> new RuntimeException("Card not found"));

        NewsCardLiked newsCardLiked = new NewsCardLiked();
        newsCardLiked.setUser(user);
        newsCardLiked.setNewsCard(newsCard);

        newsCardLikedRepository.save(newsCardLiked);
        return newsCardLiked;
    }

    public NewsCardLiked deleteNewsCardLiked(Long cardId) {
        User user = getCurrentUser();
        NewsCardLiked newsCardLiked = newsCardLikedRepository.findById(cardId)
                .orElseThrow(() -> new RuntimeException("NewsCardLiked not found"));
        newsCardLikedRepository.delete(newsCardLiked);
        return newsCardLiked;
    }

    private User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();

        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            throw new RuntimeException("Current user not found");
        }
    }
}


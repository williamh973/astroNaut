package community.astronaut.interactions.newsCard.newsCardDisliked;

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
public class NewsCardDislikedService {
    private final UserRepository userRepository;
    private final NewsCardRepository newsCardRepository;
    private final NewsCardDislikedRepository newsCardDislikedRepository;

    public List<NewsCardDisliked> getCurrentUserNewsCardDislikedList() {
        User user = getCurrentUser();
        return new ArrayList<>(user.getNewsCardDislikedList());
    }

    public NewsCardDisliked addNewsCardDisliked(Long cardId) {
        User user = getCurrentUser();

        NewsCard newsCard = newsCardRepository.findById(cardId)
                .orElseThrow(() -> new RuntimeException("Card not found"));

        NewsCardDisliked newsCardDisliked = new NewsCardDisliked();
        newsCardDisliked.setUser(user);
        newsCardDisliked.setNewsCard(newsCard);

        newsCardDislikedRepository.save(newsCardDisliked);
        return newsCardDisliked;
    }

    public NewsCardDisliked deleteNewsCardDisliked(Long cardId) {
        User user = getCurrentUser();
        NewsCardDisliked newsCardDisliked = newsCardDislikedRepository.findById(cardId)
                .orElseThrow(() -> new RuntimeException("NewsCardDisliked not found"));
        newsCardDislikedRepository.delete(newsCardDisliked);
        return newsCardDisliked;
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



package community.astronaut.interactions.newsCardLiked;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import community.astronaut.cards.newsCard.NewsCard;
import community.astronaut.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class NewsCardLiked {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "news_card_id", referencedColumnName = "id")
    @JsonIgnoreProperties("newsCardLikedList")
    private NewsCard newsCard;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")

    @JsonIgnore
    private User user;
}

package community.astronaut.comment;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import community.astronaut.cards.newsCard.NewsCard;
import community.astronaut.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 1000)
    private String content;

    @ManyToOne
    @JoinColumn(name = "news_card_id", referencedColumnName = "id")
    @JsonIgnoreProperties(
            {
                    "commentsList",
                    "picturesList",
                    "title",
                    "mainArticle",
                    "optionalArticleOne",
                    "optionalArticleTwo",
                    "readingTime",
                    "timestamp",
                    "likeCount",
                    "dislikeCount",
                    "user"
            })
    private NewsCard newsCard;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @JsonIgnoreProperties(
            {
                    "commentsList",
                    "newsCardList",
                    "newsCardLikedList",
                    "newsCardDislikedList",
                    "enabled",
                    "credentialsNonExpired",
                    "accountNonExpired",
                    "authorities",
                    "accountNonLocked"
            })
    private User user;

    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    private Integer likeCount;

    private Integer dislikeCount;

}

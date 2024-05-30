package community.astronaut.cards.newsCard;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import community.astronaut.comment.Comment;
import community.astronaut.imagesForCards.imageForNews.Picture;
import community.astronaut.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class NewsCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "newsCard", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties("newsCard")
    private Set<Picture> picturesList = new HashSet<>();

    private String title;

    @Column(length = 1000)
    private String mainArticle;

    @Column(length = 1000)
    private String optionalArticleOne;

    @Column(length = 1000)
    private String optionalArticleTwo;

    @Column(length = 1000)
    private String optionalArticleThree;

    private Integer readingTime;

    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    private Integer likeCount;

    private Integer dislikeCount;

    @OneToMany(mappedBy = "newsCard", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties("newsCard")
    private Set<Comment> commentsList = new HashSet<>();

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @JsonIgnoreProperties(
            {
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
}

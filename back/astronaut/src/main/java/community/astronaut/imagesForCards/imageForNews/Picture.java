package community.astronaut.imagesForCards.imageForNews;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import community.astronaut.cards.newsCard.NewsCard;
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
public class Picture {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 2048)
    private String src;

    @ManyToOne
    @JoinColumn(name = "news_card_id", referencedColumnName = "id")
    @JsonIgnoreProperties(
            {
                    "picturesList",
                    "title",
                    "mainArticle",
                    "optionalArticleOne",
                    "optionalArticleTwo",
                    "optionalArticleThree",
                    "readingTime",
                    "timestamp",
                    "likeCount",
                    "dislikeCount",
                    "commentsList",
                    "user"
            })
    private NewsCard newsCard;

    @Override
    public String toString() {
        return "Picture{" +
                "id=" + id +
                ", src='" + src + '\'' +
                ", newsCard='" + (newsCard != null ? newsCard.getId() : "null") +
                '}';
    }
}


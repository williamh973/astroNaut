package community.astronaut.comment;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import community.astronaut.cards.newsCard.NewsCard;
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
    @JsonIgnoreProperties("commentsList")
    private NewsCard newsCard;

    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    private Integer likeCount;

    private Integer dislikeCount;

}

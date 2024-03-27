package community.astronaut.picture;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import community.astronaut.newsCard.NewsCard;
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

    private String src;


    @ManyToOne
    @JoinColumn(name = "news_card_id", referencedColumnName = "id")
    @JsonIgnoreProperties("picturesList")
    private NewsCard newsCard;
}

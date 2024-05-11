package community.astronaut.imagesForCards.imageForPictureAuthor;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import community.astronaut.cards.pictureAuthorCard.PictureAuthorCard;
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
public class ImageForPictureAuthor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String src;

    @ManyToOne
    @JoinColumn(name = "picture_author_card_id", referencedColumnName = "id")
    @JsonIgnoreProperties("imageListForPictureAuthor")
    private PictureAuthorCard pictureAuthorCard;
}




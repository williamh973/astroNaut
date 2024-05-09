package community.astronaut.imagesForCards.imageForPictureSpecialEvent;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import community.astronaut.cards.pictureSpecialEventCard.PictureSpecialEventCard;
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
public class ImageForPictureSpecialEvent {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String src;

    @ManyToOne
    @JoinColumn(name = "picture_special_event_card_id", referencedColumnName = "id")
    @JsonIgnoreProperties("imageListForPictureSpecialEvent")
    private PictureSpecialEventCard pictureSpecialEventCard;
}


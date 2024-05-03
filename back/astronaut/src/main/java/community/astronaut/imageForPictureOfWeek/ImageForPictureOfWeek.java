package community.astronaut.imageForPictureOfWeek;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import community.astronaut.pictureOfWeekCard.PictureOfWeekCard;
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
public class ImageForPictureOfWeek {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String src;

    @ManyToOne
    @JoinColumn(name = "picture_of_week_card_id", referencedColumnName = "id")
    @JsonIgnoreProperties("imageListForPictureOfWeek")
    private PictureOfWeekCard pictureOfWeekCard;
}


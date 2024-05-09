package community.astronaut.cards.pictureSpecialEventCard;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import community.astronaut.imagesForCards.imageForPictureSpecialEvent.ImageForPictureSpecialEvent;
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
public class PictureSpecialEventCard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "pictureSpecialEventCard", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties("pictureSpecialEventCard")
    private Set<ImageForPictureSpecialEvent> imageListForPictureSpecialEvent = new HashSet<>();

    private String title;

    @Column(length = 1000)
    private String resume;

    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

}

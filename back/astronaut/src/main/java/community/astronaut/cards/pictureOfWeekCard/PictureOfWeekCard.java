package community.astronaut.cards.pictureOfWeekCard;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import community.astronaut.imagesForCards.imageForPictureOfWeek.ImageForPictureOfWeek;
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
public class PictureOfWeekCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "pictureOfWeekCard", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties("pictureOfWeekCard")
    private Set<ImageForPictureOfWeek> imageListForPictureOfWeek = new HashSet<>();

    private String title;

    @Column(length = 1000)
    private String resume;

    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;
}

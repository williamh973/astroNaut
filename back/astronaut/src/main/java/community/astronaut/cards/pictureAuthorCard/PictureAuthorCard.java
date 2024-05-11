package community.astronaut.cards.pictureAuthorCard;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import community.astronaut.imagesForCards.imageForPictureAuthor.ImageForPictureAuthor;
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
public class PictureAuthorCard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToMany(mappedBy = "pictureAuthorCard", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties("pictureAuthorCard")
    private Set<ImageForPictureAuthor> imageListForPictureAuthor = new HashSet<>();

    private String title;

    @Column(length = 1000)
    private String resume;

    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;
}

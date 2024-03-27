package community.astronaut.newsCard;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import community.astronaut.picture.Picture;
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

    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;
}

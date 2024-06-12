package community.astronaut.contact;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import community.astronaut.user.User;
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
public class Contact {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String subject;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String content;

    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @JsonIgnoreProperties(
            {
                    "contactList",
                    "newsCardList",
                    "newsCardLikedList",
                    "newsCardDislikedList",
                    "enabled",
                    "credentialsNonExpired",
                    "accountNonExpired",
                    "authorities",
                    "accountNonLocked",
                    "commentsList"
            })
    private User user;
}

package community.astronaut.reply;

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
public class Reply {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subject;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String content;

    @Temporal(TemporalType.TIMESTAMP)
    private Date timestamp;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    @JsonIgnoreProperties(
            {
                    "replyList",
                    "newsCardList",
                    "newsCardLikedList",
                    "newsCardDislikedList",
                    "enabled",
                    "credentialsNonExpired",
                    "accountNonExpired",
                    "authorities",
                    "accountNonLocked",
                    "contactList",
                    "commentsList"
            })
    private User user;


    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinColumn(name = "receiver_id", referencedColumnName = "id")
    @JsonIgnoreProperties(
            {
                    "replyList",
                    "newsCardList",
                    "newsCardLikedList",
                    "newsCardDislikedList",
                    "enabled",
                    "credentialsNonExpired",
                    "accountNonExpired",
                    "authorities",
                    "accountNonLocked",
                    "contactList",
                    "commentsList"
            })
    private User receiver;

}

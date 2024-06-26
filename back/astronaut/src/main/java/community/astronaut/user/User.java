package community.astronaut.user;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import community.astronaut.cards.newsCard.NewsCard;
import community.astronaut.comment.Comment;
import community.astronaut.contact.Contact;
import community.astronaut.interactions.newsCard.newsCardDisliked.NewsCardDisliked;
import community.astronaut.interactions.newsCard.newsCardLiked.NewsCardLiked;
import community.astronaut.reply.Reply;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String pseudo;
    private String firstname;
    private String lastname;
    private String email;
    @JsonIgnore
    private String password;
    private String role;
    private boolean blocked;

    @JsonDeserialize(using = CustomGrantedAuthorityDeserializer.class)
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        List<GrantedAuthority> authorities = new ArrayList<>();
        authorities.add(new SimpleGrantedAuthority(role));
        return authorities;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return !blocked;
    }

   @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
   @JsonIgnoreProperties(
           {
                   "user",
                   "commentsList",
                   "picturesList",
                   "mainArticle",
                   "readingTime",
                   "timestamp",
                   "likeCount",
                   "dislikeCount"
           })
   private Set<NewsCard> newsCardList = new HashSet<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties(
            {
                    "user",
                    "commentsList",
                    "newsCard",
                    "timestamp",
                    "likeCount",
                    "dislikeCount"
            })
    private Set<Comment> commentsList = new HashSet<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties(
            {
                    "user",
                    "newsCardLikedList",
                    "newsCard",
                    "timestamp",
                    "likeCount",
                    "dislikeCount"

            })
    private Set<NewsCardLiked> newsCardLikedList = new HashSet<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties(
            {
                    "user",
                    "newsCardDislikedList",
                    "newsCard",
                    "timestamp",
                    "likeCount",
                    "dislikeCount"
            })
    private Set<NewsCardDisliked> newsCardDislikedList = new HashSet<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties(
            {
            "user",
            "contactList",
            "newsCard",
            "timestamp",
            "likeCount",
            "dislikeCount"
            })
    private Set<Contact> contactList = new HashSet<>();

    @OneToMany(mappedBy = "receiver", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnoreProperties(
            {
                    "receiver",
                    "replyList",
                    "newsCard",
                    "timestamp",
                    "likeCount",
                    "dislikeCount"
            })
    private Set<Reply> replyList = new HashSet<>();

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", newsCardLikedList='" + (newsCardLikedList != null ? newsCardLikedList.getClass() : "null") +
                '}';
    }
}
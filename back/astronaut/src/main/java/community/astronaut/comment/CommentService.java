package community.astronaut.comment;

import community.astronaut.cards.newsCard.NewsCard;
import community.astronaut.cards.newsCard.NewsCardRepository;
import community.astronaut.user.User;
import community.astronaut.user.UserRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CommentService {
    private final CommentRepository commentRepository;
    private final NewsCardRepository newsCardRepository;
    private final UserRepository userRepository;

    public List<Comment> getAll() {
        return commentRepository.findAll();
    }

    @Transactional
    public Comment addComment(Comment comment, Long id, String senderUserMail) {

        User user = userRepository.findByEmail(senderUserMail)
                .orElseThrow(() -> new RuntimeException(senderUserMail + " senderUserMail not found"));

        NewsCard newsCard = newsCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + " not found"));

                comment.setNewsCard(newsCard);
                comment.setUser(user);
                comment.setTimestamp(new Date());
        return commentRepository.save(comment);
    }

    public Comment getCommentById(Long id) {
        return commentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + "not found"));
    }

    public Comment updateComment(Comment comment, Long id) {
        Comment foundComment = getCommentById(id);
        foundComment.setLikeCount(comment.getLikeCount());
        foundComment.setDislikeCount(comment.getDislikeCount());
        return commentRepository.save(foundComment);
    }

    public Comment deleteComment(Long id) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + " not found"));
        commentRepository.delete(comment);
        return comment;
    }

}

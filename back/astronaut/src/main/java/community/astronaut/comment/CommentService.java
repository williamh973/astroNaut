package community.astronaut.comment;

import community.astronaut.cards.newsCard.NewsCard;
import community.astronaut.cards.newsCard.NewsCardRepository;
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

    public List<Comment> getAll() {
        return commentRepository.findAll();
    }

    @Transactional
    public Comment addComment(Comment comment, Long id) {
        NewsCard newsCard = newsCardRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + " not found"));
        System.out.println("Adding comment for newsCard id: " + id);
                comment.setNewsCard(newsCard);
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

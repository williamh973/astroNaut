package community.astronaut.comment;


import community.astronaut.cards.newsCard.NewsCardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/commentCards")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;
    private final NewsCardRepository newsCardRepository;

    @GetMapping("/all")
    public List<Comment> getAll() {
        return commentService.getAll();
    }

    @GetMapping("/{id}")
    public Comment getCommentById(@PathVariable("id") Long id) {
        return commentService.getCommentById(id);
    }


    @PostMapping("/add")
    public Comment addComment(@RequestBody Comment comment, @RequestParam("newsCardAssociatedId") Long id, @RequestParam("senderUserMail") String senderUserMail) {
        return commentService.addComment(comment, id, senderUserMail);
    }

    @PutMapping("/update/{id}")
    public Comment updateComment(@RequestBody Comment comment, @PathVariable("id") Long id) {
        return commentService.updateComment(comment, id);
    }

    @DeleteMapping("delete/{id}")
    public Comment deleteComment(@PathVariable("id") Long id) {
        return commentService.deleteComment(id);
    }
}


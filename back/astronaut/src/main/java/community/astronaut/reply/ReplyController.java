package community.astronaut.reply;
import community.astronaut.user.User;
import community.astronaut.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/replyTexts")
@RequiredArgsConstructor
public class ReplyController {


    private final ReplyService replyService;

    @GetMapping("/{userMail}/all")
    public List<Reply> getReplyList( @PathVariable("userMail") String userMail) {
        return replyService.getReplyList(userMail);
    }

    @GetMapping("/{id}")
    public Reply getReplyById(@PathVariable("id") Long id) {
        return replyService.getReplyById(id);
    }

    @PostMapping("/add")
    public Reply addReply(
            @RequestBody Reply reply,
            @RequestParam("receiverUserId") Long receiverUserId
    ) {
        return replyService.addReply(reply, receiverUserId);
    }

    @DeleteMapping("/delete/{id}")
    public Reply deleteReplyById(@PathVariable("id") Long id) {
        return replyService.deleteReplyById(id);
    }
}

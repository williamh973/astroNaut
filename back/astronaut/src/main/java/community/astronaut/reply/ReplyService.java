package community.astronaut.reply;

import community.astronaut.user.User;
import community.astronaut.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class ReplyService {
    private final ReplyRepository replyRepository;
    private final UserRepository userRepository;

    public List<Reply> getReplyList(String userMail) {
        User user = userRepository.findByEmail(userMail)
                .orElseThrow(() -> new RuntimeException("user not found"));
        return new ArrayList<>(user.getReplyList());
    }


    public Reply addReply(Reply reply, Long receiverUserId) {
        User senderUser = getCurrentUser();

        User receiverUser = userRepository.findById(receiverUserId)
                .orElseThrow(() -> new RuntimeException("Selected user not found"));
        reply.setTimestamp(new Date());
        reply.setUser(senderUser);
        reply.setReceiver(receiverUser);
        return replyRepository.save(reply);
    }

    public Reply getReplyById(Long id) {
        return replyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + "not found"));
    }

    public Reply deleteReplyById(Long id) {
        Reply reply = replyRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("reply not found"));
        replyRepository.delete(reply);
        return reply;
    }

    private User getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();

        Optional<User> userOptional = userRepository.findByEmail(email);
        if (userOptional.isPresent()) {
            return userOptional.get();
        } else {
            throw new RuntimeException("Current user not found");
        }
    }
}

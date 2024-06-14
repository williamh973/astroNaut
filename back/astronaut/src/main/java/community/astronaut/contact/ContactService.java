package community.astronaut.contact;

import community.astronaut.user.User;
import community.astronaut.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactService {
    private final ContactRepository contactRepository;
    private final UserRepository userRepository;

    public List<Contact> getAll() {
        String role  = SecurityContextHolder.getContext().getAuthentication().getAuthorities().toString();
        if(role.equals("[ROLE_ADMIN]")) {
            return contactRepository.findAll();
        }
        return null;
    }


    public Contact addContact(Contact contact, String senderUserMail) {

        User senderUser = userRepository.findByEmail(senderUserMail)
                .orElseThrow(() -> new RuntimeException(senderUserMail + " senderUser not found"));
        contact.setUser(senderUser);
        contact.setTimestamp(new Date());
        return contactRepository.save(contact);
    }

    public Contact getContactById(Long id) {
        return contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + "not found"));
    }

    public Contact deleteContactById(Long id) {
        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("contact not found"));
        contactRepository.delete(contact);
        return contact;
    }
}

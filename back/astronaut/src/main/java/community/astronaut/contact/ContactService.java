package community.astronaut.contact;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactService {
    private final ContactRepository contactRepository;

    public List<Contact> getAll() {
        return contactRepository.findAll();
    }


    public Contact addContact(Contact contact) {
        contact.setTimestamp(new Date());
        return contactRepository.save(contact);
    }

    public Contact getContactById(Long id) {
        return contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + "not found"));
    }
}

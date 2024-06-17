package community.astronaut.contact;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/contactTexts")
@RequiredArgsConstructor
public class ContactController {


    private final ContactService contactService;

    @GetMapping("/all")
    public List<Contact> getAll() {
        return contactService.getAll();
    }

    @GetMapping("/{id}")
    public Contact getContactById(@PathVariable("id") Long id) {
        return contactService.getContactById(id);
    }

    @PostMapping("/add")
    public Contact addContact(@RequestBody Contact contact, @RequestParam("senderUserMail") String senderUserMail) {
        contact.setTimestamp(new Date());
        return contactService.addContact(contact, senderUserMail);
    }

    @DeleteMapping("/delete/{id}")
    public Contact deleteContactById(@PathVariable("id") Long id) {
        return contactService.deleteContactById(id);
    }
}

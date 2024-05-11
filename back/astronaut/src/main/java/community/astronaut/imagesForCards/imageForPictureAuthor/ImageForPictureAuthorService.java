package community.astronaut.imagesForCards.imageForPictureAuthor;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ImageForPictureAuthorService {
    private final ImageForPictureAuthorRepository imageForPictureAuthorRepository;


    public List<ImageForPictureAuthor> getAll() {
        return imageForPictureAuthorRepository.findAll();
    }

    public ImageForPictureAuthor getImageForPictureAuthorById(Long id) {
        return imageForPictureAuthorRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(id + "not found"));
    }

    public ImageForPictureAuthor addImageForPictureAuthor(ImageForPictureAuthor imageForPictureAuthor) {
        return imageForPictureAuthorRepository.save(imageForPictureAuthor);
    }

    public ImageForPictureAuthor updateImageForPictureAuthor(ImageForPictureAuthor imageForPictureAuthor, Long id) {

        ImageForPictureAuthor foundImageForPictureAuthor = getImageForPictureAuthorById(id);
        foundImageForPictureAuthor.setSrc(imageForPictureAuthor.getSrc());


        return imageForPictureAuthorRepository.save(foundImageForPictureAuthor);

    }

    public void deleteImageForPictureAuthor(Long id) {
        imageForPictureAuthorRepository.deleteById(id);
    }


}

package me.pluse.mediaservice.service;

import me.pluse.mediaservice.dto.MediaResponse;
import me.pluse.mediaservice.model.Media;
import me.pluse.mediaservice.repository.MediaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class MediaService {

    @Autowired
    MediaRepository mediaRepository;

    public MediaResponse fileUpload(MultipartFile file) throws IOException{
        if (file.isEmpty()) {
            throw new IOException("Failed to upload empty file");
        }

//        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        Media media = new Media();
//        media.setTitle(fileName);
        media.setContentType(file.getContentType());
//        media.setFileSize(file.getSize());
        media.setData(file.getBytes());  // Set binary data

        media = mediaRepository.save(media);
        // Assuming the URL or ID is derived like this
        return new MediaResponse(media);
    }

    public Media getFile(String id) {
        return mediaRepository.findById(id).orElseThrow(() -> new RuntimeException("File not found with id " + id));
    }


    public MediaResponse updateMedia(String id, MultipartFile file) throws IOException{
        if (file.isEmpty()){
            throw new IOException("Failed to upload empty file");
        }

        Media existingMedia = mediaRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("File not found with id " + id));

        existingMedia.setData(file.getBytes());
        mediaRepository.save(existingMedia);

        return new MediaResponse(existingMedia);
    }


    public void deleteMedia(String id) {
        if (!mediaRepository.existsById(id)) {
            throw new IllegalStateException("Media not found with id: " + id);
        }
        mediaRepository.deleteById(id);
    }
}

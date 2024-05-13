package me.pluse.mediaservice.controller;

import io.micrometer.common.util.StringUtils;
import me.pluse.mediaservice.dto.MediaResponse;
import me.pluse.mediaservice.model.Media;
import me.pluse.mediaservice.service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/media")
public class MediaController {

    @Autowired
    MediaService mediaService;

    @PostMapping("/fileupload")
    public ResponseEntity<MediaResponse> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        MediaResponse mediaResponse = mediaService.fileUpload(file);
        return ResponseEntity.ok(mediaResponse);
    }

    @GetMapping("/filedownload/{id}")
    public ResponseEntity<ByteArrayResource> downloadFile(@PathVariable String id) {
        Media media = mediaService.getFile(id);

        if (media == null){
            return ResponseEntity.notFound().build();
        }

//        String filename = StringUtils.cleanPath(media.get() != null ? media.getTitle() : "downloaded-file");
        ByteArrayResource resource = new ByteArrayResource(media.getData());

        return ResponseEntity.ok()
                .contentType(MediaType.parseMediaType(media.getContentType()))
                .header(HttpHeaders.CONTENT_DISPOSITION)
                .body(resource);
    }

    @PutMapping("/updatefile/{id}")
    public ResponseEntity<MediaResponse> updateFile(@PathVariable String id, @RequestPart("file") MultipartFile file){
        try {
            MediaResponse updatedMedia = mediaService.updateMedia(id, file);
            return ResponseEntity.ok(updatedMedia);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        } catch (IllegalStateException | IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

    }


    @DeleteMapping("/deletefile/{id}")
    public ResponseEntity<Void> deleteMedia(@PathVariable String id) {
        try {
            mediaService.deleteMedia(id);
            return ResponseEntity.ok().build();
        } catch (IllegalStateException e) {
            return ResponseEntity.notFound().build();
        }
    }
}

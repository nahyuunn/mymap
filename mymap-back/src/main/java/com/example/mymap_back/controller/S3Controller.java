package com.example.mymap_back.controller;


import com.example.mymap_back.service.implement.S3Service;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/file")
public class S3Controller {
    private final S3Service s3Service;
//    @PostMapping("/upload")
//    public ResponseEntity<List<String>> uploadFile(List<MultipartFile> multipartFiles){
//        return ResponseEntity.ok((s3Service.uploadFile(multipartFiles)));
//    }
    // AWS S3Controller.java
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(MultipartFile file){
        return ResponseEntity.ok((s3Service.uploadFile(file)));
    }
    @DeleteMapping
    public ResponseEntity<String> deleteFile(@RequestParam String fileName){
        s3Service.deleteFile(fileName);
        return ResponseEntity.ok(fileName);
    }
}


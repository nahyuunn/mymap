package com.example.mymap_back.entity;


import com.example.mymap_back.dto.request.board.PostBoardRequestDto;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.LocalDate;
import java.util.Date;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "board")
@Table(name = "board")
public class BoardEntity {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int boardNumber;
    private String placeId;
    private LocalDate visitDate;
    private String content;
    private String writeDatetime;
    private int favoriteCount;
    private String writerEmail;

    public BoardEntity(PostBoardRequestDto dto, String email) {
        Date now = Date.from(Instant.now());
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        String writeDatetime = simpleDateFormat.format(now);

        this.placeId = dto.getPlaceId();
        this.visitDate = dto.getVisitDate();
        this.content = dto.getContent();
        this.writeDatetime = writeDatetime;
        this.favoriteCount = 0;
        this.writerEmail = email;
    }


    public void increaseFavoriteCount() {
        this.favoriteCount++;
    }
    public void decreaseFavoriteCount() {
        this.favoriteCount--;
    }
}

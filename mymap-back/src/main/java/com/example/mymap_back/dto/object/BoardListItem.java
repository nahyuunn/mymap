package com.example.mymap_back.dto.object;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class BoardListItem {
    private int boardNumber;

    private String placeName;
    private String placeId;
    private String visitDate;
    private String content;
    private String boardImage;
    private int favoriteCount;
    private String writeDatetime;
    private String writerNickname;
    private String writerProfileImage;
}

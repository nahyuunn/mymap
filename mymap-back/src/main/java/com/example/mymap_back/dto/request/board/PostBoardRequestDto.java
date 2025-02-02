package com.example.mymap_back.dto.request.board;


import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Past;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class PostBoardRequestDto {

    private String placeId;
    @Past
    private LocalDate visitDate;
    @NotBlank
    private String content;
    @NotNull
    private List<String> boardImageList;
}

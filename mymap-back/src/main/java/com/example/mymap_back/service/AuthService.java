package com.example.mymap_back.service;

import com.example.mymap_back.dto.request.auth.SignInRequestDto;
import com.example.mymap_back.dto.request.auth.SignUpRequestDto;
import com.example.mymap_back.dto.response.auth.SignInResponseDto;
import com.example.mymap_back.dto.response.auth.SignUpResponseDto;
import org.springframework.http.ResponseEntity;

public interface AuthService {

    ResponseEntity<? super SignUpResponseDto> sighUp(SignUpRequestDto dto);

    ResponseEntity<? super SignInResponseDto> signIn(SignInRequestDto dto);

}

package com.example.mymap_back.repository;

import com.example.mymap_back.entity.FavoriteEntity;
import com.example.mymap_back.entity.primaryKey.FavoritePk;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FavoriteRepository extends JpaRepository<FavoriteEntity, FavoritePk> {
}

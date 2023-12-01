package com.example.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.demo.model.User;

import jakarta.transaction.Transactional;

@Repository
public interface UserRepo extends JpaRepository<User, Long>{

	List<User> findByEmailAndPassword(String email, String password);
//    @Query("SELECT * FROM user WHERE email = :email AND password = :password")
//    List<User> findByEmailAndPassword(@Param("email") String email, @Param("password") String password);

	User findByUserId(Long user_id);

	// @Modifying
    // @Transactional
    // void updateProfilePicByUserId(Long userId, String profilePic);

	@Transactional
    @Modifying
    @Query("UPDATE User u SET u.profilePic = :profilePic WHERE u.userId = :userId")
    void updateProfilePic(@Param("userId") Long userId, @Param("profilePic") String profilePic);
}

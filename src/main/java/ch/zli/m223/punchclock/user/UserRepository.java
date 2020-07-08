package ch.zli.m223.punchclock.user;

import org.springframework.data.jpa.repository.JpaRepository;

/**
 * @name Mattia Trottmann
 * @date 07.07.2020
 * @desc User Repository
 */

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
package com.example.jhipster.repository;

import com.example.jhipster.domain.RfbEvent;
import org.springframework.stereotype.Repository;

import org.springframework.data.jpa.repository.*;


/**
 * Spring Data JPA repository for the RfbEvent entity.
 */
@SuppressWarnings("unused")
@Repository
public interface RfbEventRepository extends JpaRepository<RfbEvent, Long> {

}

package tn.esprit.repositories;

import tn.esprit.entities.ServiceChambre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceChambreRepository extends JpaRepository<ServiceChambre, Long> {
}
